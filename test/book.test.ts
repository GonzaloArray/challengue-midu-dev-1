import { books, genres } from '../src/service/book';
import { describe, it, expect } from 'vitest'

describe('Reading List App', () => {

  it('should avaliable list have 13 elements', () => {
    expect(books.length).toBe(13)
  })

  it('should avaliable list have 13 elements', () => {
    expect(genres.length).toBe(4)
  })
})