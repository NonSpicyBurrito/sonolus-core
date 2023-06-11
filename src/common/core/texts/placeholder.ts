export const PlaceholderText = {
    Keywords: '#KEYWORDS',
    Name: '#NAME',
    Rating: '#RATING',
    MinimumRating: '#RATING_MINIMUM',
    MaximumRating: '#RATING_MAXIMUM',
    Title: '#TITLE',
    Subtitle: '#SUBTITLE',
    Artists: '#ARTISTS',
    Author: '#AUTHOR',
    Genre: '#GENRE',
    Category: '#CATEGORY',
    Language: '#LANGUAGE',
    Difficulty: '#DIFFICULTY',
    Length: '#LENGTH',
    MinimumLength: '#LENGTH_MINIMUM',
    MaximumLength: '#LENGTH_MAXIMUM',
} as const

export type PlaceholderText =
    (typeof PlaceholderText)[keyof typeof PlaceholderText]
