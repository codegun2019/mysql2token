import { Expose } from "class-transformer";

export  class CustomerDto {

    @Expose()
    customer_id : number;

    @Expose()
    customer_code : string;

    // @Expose({ unique: true })
    // customer_pin: string;

    @Expose()
    customer_name: string;

    @Expose()
    customer_name_en: string;

    @Expose()
    customer_bank_holder_name: string;

    @Expose()
    customer_name_en_scb: string;

    @Expose()
    customer_img: string;

    @Expose()
    bank_id: string;

    @Expose()
    bank_no: string;

    @Expose()
    truewallet_id: string;

    @Expose()
    line_id: string;

    @Expose()
    phone : string;

    @Expose()
    email: string;

    @Expose()
    idcard: string;

    @Expose()
    backidcard: string;

    @Expose()
    birthday: string;

    @Expose()
    remark: string;

    @Expose()
    status: number;

    @Expose()
    verify_identity: number;

    @Expose()
    verify_bank: number;

    @Expose()
    device_token: string;

    @Expose()
    user_token: string;

    @Expose()
    agent_id: string;

    @Expose()
    nopromation: string;

    @Expose()
    languages : string;

    @Expose()
    register_type : string;

    @Expose()
    scb_premium : string;

    @Expose()
    qr_status : string;

    @Expose()
    referer : string;

    @Expose()
    referer_status : number;

    @Expose()
    mylink : string;

    @Expose()
    welcome : number;

    @Expose()
    wrong_bank : number;

    @Expose()
    lastupdate : Date;

    @Expose()
    createdate  : Date;

    @Expose()
    isBankVerified : string;
}
