import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export const cn = (...classes: ClassValue[]): string => {
    return twMerge(clsx(...classes))
}

export const unique = <T, Key extends keyof T>(
    array: Array<T> | T[],
    property?: Key,
): Array<T> => {
    if (!property) return Array.from(new Set([...array]))
    const set = new Set()
    return array.filter((o: T) => !set.has(o[property]) && set.add(o[property]))
}

export function uid() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const uidLength = 16;
    let uid = '';
    for (let i = 0; i < uidLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uid += characters.charAt(randomIndex);
    }
    return uid;
}