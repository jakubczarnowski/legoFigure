export interface Figure {
	set_num: string;
	name: string;
	num_parts: number;
	set_img_url: string;
	set_url: string;
	last_modified_dt: Date;
}

export interface ApiResponse<T> {
	count: number;
	next: string;
	previous?: any;
	results: T[];
}
export interface ShippingData {
	name: string;
	surname: string;
	phoneNumber: string;
	email: string;
	dateOfBirth: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
}
export interface Part {
	part_num: string;
	name: string;
	part_cat_id: number;
	part_url: string;
	part_img_url: string;
}

export interface PartsResponse {
	id: number;
	inv_part_id: number;
	part: Part;
}
