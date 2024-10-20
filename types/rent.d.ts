declare global {
    interface IRentOptionList {
        rent_options_list_cost: number,
        rent_options_list_name: string
    }
    interface IRentOption {
        rent_option_cat_name: string,
        rent_options_list: IRentOptionList[]
    }
    interface IRent {
        title: {
            rendered: string
        },
        id: number,
        meta_query: string,
        acf: {
            id_client: number | string,
            name_client: string,
            online_payment_status: string,
            payment_cost: string,
            payment_method: string,
            phone_number_client: string | number,
            rent_car_city: string,
            rent_car_class: string,
            rent_car_end_date: Date | string | number,
            rent_car_post_id: string,
            rent_car_post_rent_id: string,
            rent_car_start_date: Date | string | number,
            rent_cost_result: number,
            rent_day_count: number,
            rent_options: IRentOption[],
            rent_status: string,
            rent_wishes_client: string,
            surname_client: string
        }
    }

    interface ICarRent {
        ID: number,
        title: string,
        acf_fields: {
            rent_car_city: string,
            rent_car_end_date: string,
            rent_car_post_id: string,
            rent_car_start_date: string,
            rent_day_count: number,
            rent_documents: array|string|boolean,
            rent_options: array|string|boolean,
            rent_status: string
        }
    }
}
export {}