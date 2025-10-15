import { Gif } from "../interfaces/gif.interface";
import { GiftItem } from "../interfaces/githy.interface";

export class GifMapper {
    static mapGiphyToGif(item: GiftItem): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }

    static mapGiphyArrayToGifArray(items: GiftItem[]): Gif[] {
        return items.map(this.mapGiphyToGif);
    }
}