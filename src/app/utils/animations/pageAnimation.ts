import { query, group, style, animate } from "@angular/animations";

export const left = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.6s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.6s ease-out', style({ transform: 'translateX(100%)' }))], {
            optional: true,
        }),
    ]),
];

export const right = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(100%)' }), animate('.9s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.6s ease-out', style({ transform: 'translateX(-100%)' }))], {
            optional: true,
        }),
    ]),
];
