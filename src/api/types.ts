export interface CharmersDefaultType {
  name: string;
  openTime: string;
  shareLink: string;
}

export interface CharmersExtendsType extends CharmersDefaultType {
  finished: boolean;
}
