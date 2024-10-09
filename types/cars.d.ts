declare global {
    interface ISize {
        [key: string]: string; // Чтобы учесть динамические ключи и значения
    }
    interface ICarGalleryImage {
        ID: number;
        id: number;
        title: string;
        filename: string;
        filesize: number;
        url: string;
        link: string;
        alt: string;
        author: string;
        description: string;
        caption: string;
        name: string;
        status: string;
        uploaded_to: number;
        date: string;
        modified: string;
        menu_order: number;
        mime_type: string;
        type: string;
        subtype: string;
        icon: string;
        width: number;
        height: number;
        sizes: ISize; // Используем интерфейс ISize для размеров изображений
    }
    interface ICar {
        id: number,
        link: string,
        title: {
            rendered: string,
        },
        acf: {
            car_id: string; // Добавляем поле car_id
            car_gallery: ICarGalleryImage[]; // Используем массив ICarGalleryImage
            "8-14_day_rent": number,
        },
        
    }
}
export {}