export interface ProfileFetcher {
  fetcher: () => Promise<void>
}

export type FetcherFunc = () => Promise<void>
