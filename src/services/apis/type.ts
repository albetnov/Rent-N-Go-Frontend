export interface Features {
  ID: number
  IconKey: string
  Value: string
}

export interface Pictures {
  ID: number
  FileName: string
}

export interface MetaData {
  current_page: number
  has_next: boolean
  has_previous: boolean
  total_page: number
}

export interface MappedFeature {
  icon: string
  label: string
}

export interface MappedPicture {
  file_name: string
}
