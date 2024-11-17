export interface Book {
  title?: string;
  cover?: string;
  salesDate?: string;
}

export interface RakutenBookResponse {
  Items: [
    {
      Item: {
        largeImageUrl: string;
        salesDate: string;
        title: string;
      };
    },
  ];
}

export interface BookResponse {
  id: number;
  title: string;
  cover: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}
