export interface TBike {
	name: string;
	pricePerHour: number;
	isAvailable: boolean;
	cc: number;
	year: number;
	model: string;
	brand: string;
	weight: number;
	coverImage: string;
	isElectric: boolean;
	chargeCapacity: number;
	isDeleted: boolean;
	createdAt: Date;
	updatedAt: Date;
}
