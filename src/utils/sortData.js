import { sortOptions } from '../constants/sortOptions'

export const sortData = (store, sortBy) => {
  switch (sortBy) {
    case sortOptions.nameAZ:
      return sortByNameAscending(store)
    case sortOptions.nameZA:
      return sortByNameDescending(store)
    case sortOptions.categoryAZ:
      return sortByCategoryAscending(store)
    case sortOptions.categoryZA:
      return sortByCategoryDescending(store)
    case sortOptions.fileSizeUp:
      return sortBySizeAscending(store)
    case sortOptions.fileSizeDown:
      return sortBySizeDescending(store)
    case sortOptions.timeCreatedUp:
      return sortByDateAscending(store)
    case sortOptions.timeCreatedDown:
      return sortByDateDescending(store)
    default:
      return store
  }
}

const sortByNameAscending = (data) => {
  return [...data].sort((x, y) => x.image.split('/')[1].localeCompare(y.image.split('/')[1]))
}

const sortByNameDescending = (data) => {
  return [...data].sort((x, y) => y.image.split('/')[1].localeCompare(x.image.split('/')[1]))
}

const sortByCategoryAscending = (data) => {
  return [...data].sort((x, y) => x.category.localeCompare(y.category))
}

const sortByCategoryDescending = (data) => {
  return [...data].sort((x, y) => y.category.localeCompare(x.category))
}

const sortBySizeAscending = (data) => {
  return [...data].sort((x, y) => x.filesize - y.filesize)
}

const sortBySizeDescending = (data) => {
  return [...data].sort((x, y) => y.filesize - x.filesize)
}

const sortByDateAscending = (data) => {
  return [...data].sort((x, y) => x.timestamp - y.timestamp)
}

const sortByDateDescending = (data) => {
  return [...data].sort((x, y) => y.timestamp - x.timestamp)
}
