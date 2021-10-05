 //THESE ALL ARE CUSTOM TYPES
 export type Course = {
    id?: number;
    author: string;
    title: string;
    price: number;
    rating: number;
    thumbUrl?: string;
    category: string;
};

export type User = {
    id?: number;
    email: string;
    fullname: string;
    password?: string;
    confirmPass?: string;
    datejoined?: string;
}

export type Wishlist = {
    wishlistId: number;
    course: Course;
    createdAt: string
}
