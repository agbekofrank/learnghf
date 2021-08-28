import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state
} from '@angular/animations';



export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('7.3s', style({ opacity: 1 }))
        ]),
    ]);

export const fader = trigger('routeAnimations', [
    transition('*<=>*', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)'
            }),
            query(':enter', [
                animate('600ms ease', style({
                    opacity: 1,
                    transform: 'scale(1) translateY(0)'
                }))
            ], {optional: true})
        ])
    ])
]);
export const openClose = trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('5s')
      ]),
      transition('closed => open', [
        animate('2.5s')
      ])
    ]);

export const transAnimation = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);

const resetRoute = [
    style({ position: 'relative' }),
    query(
        ':enter, :leave',
        [
            style({
                position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
                top: 0, // adjust this if you have a header so it factors in the height and not cause the router outlet to jump as it animates
                left: 0,
                width: '100%',
                opacity: 0,
            }),
        ],
        { optional: true }
    ),
];

// Fade Animation
trigger('routeFadeAnimation', [
    transition('* => *', [
        ...resetRoute,
        query(':enter', [style({ opacity: 0 })], {
            optional: true,
        }),
        group([
            query(
                ':leave',
                [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
                { optional: true }
            ),
        ]),
    ]),
]);


