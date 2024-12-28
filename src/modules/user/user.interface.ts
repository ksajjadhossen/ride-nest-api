export type TUserRole = "user" | "admin";

export interface TUser {
	name: string;
	id: string;
	email: string;
	password: string;
	phone: string;
	address: string;
	role: TUserRole;
	isDeleted: boolean;
}
