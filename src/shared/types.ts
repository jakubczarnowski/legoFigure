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
