import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    public async searchProducts(searchItem) {
        await fetch(
            `http://products-service:3000/search?searchWord=&${searchItem}`,
        );
    }
}
