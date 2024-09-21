'use server'

interface Repo {
  id: number
  name: string
  full_name: string
  private: boolean
}

interface Commit {
  sha: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    message: string
  }
}

interface CommitResponse {
  repo: string
  totalCommits: number
}

async function fetchRepos(): Promise<Repo[]> {
  const response = await fetch(`${process.env.GITHUB_API_BASE}/user/repos`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  })

  if (!response.ok) {
    throw new Error('Erro ao buscar repositórios do usuário.')
  }

  return response.json()
}

async function fetchCommits(
  repoName: string,
  page: number = 1,
): Promise<Commit[]> {
  const response = await fetch(
    `${process.env.GITHUB_API_BASE}/repos/devjpedro/${repoName}/commits?per_page=100&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  )

  if (!response.ok) return []

  return response.json()
}

export default async function getAllCommits(): Promise<number> {
  const repos = await fetchRepos()
  const allCommitsPerRepository: CommitResponse[] = []

  for (const { name: repoName } of repos) {
    let totalCommits = 0
    let page = 1
    let commitPage: Commit[]

    do {
      commitPage = await fetchCommits(repoName, page)
      totalCommits += commitPage.length
      page++
    } while (commitPage.length === 100)

    if (totalCommits > 0) {
      allCommitsPerRepository.push({ repo: repoName, totalCommits })
    }
  }

  const allCommitsNumber = allCommitsPerRepository.reduce(
    (acc, currentValue) => {
      return currentValue.totalCommits + acc
    },
    0,
  )

  return allCommitsNumber
}
