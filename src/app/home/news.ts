export interface News {
  id: number;
  news_title: string;
  news_detail: string;
  news_img_path: string;
  view?: any;
  created_at: Date;
  updated_at: Date;
}
