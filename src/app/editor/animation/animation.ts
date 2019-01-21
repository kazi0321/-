import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

export const anies = [
    trigger('a', [
        state('aa', style({ transform: 'translateX(0px)' })),
        state('ab', style({ transform: 'translateX(70px)' })),
        transition('aa => ab', animate('0.1s ease')),
        transition('ab => aa', animate('0.08s ease'))
    ]),
    trigger('fadeLine', [
        state('inline', style({ background: 'white' })),
        state('outline', style({ background: 'aquamarine' })),
        transition('inline => outline', animate('0.5s linear')),
        transition('outline => inline', animate('0.5s linear')),
    ]),
    trigger('rotate', [
        state('a', style({ transform: 'rotate(0deg)' })),
        state('b', style({ transform: 'rotate(360deg)' })),
        transition('a => b', animate('0.5s linear')),
        transition('b => a', animate('0.5s linear')),
    ]),
    trigger('modal', [
        state('dact', style({
            position: 'fixed',
            top: 0,
            left: 0,
            'z-index': 2,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, .7)',
            opacity: 0,
            visibility: 'hidden',
        })),
        state('act', style({
            position: 'fixed',
            top: 0,
            left: 0,
            'z-index': 2,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, .7)',
            opacity: 1,
            visibility: 'visible',
        })),
        transition('dact => act', animate('0.3s linear')),
        transition('act => dact', animate('0.3s linear'))
    ]),
    trigger('zidx', [
        state('s1', style({ 'z-index': 1, opacity: 1 })),
        state('s3', style({ 'z-index': 3, opacity: 1 })),
        transition('s1 => s3', [ animate(300, keyframes([
            style({'z-index': 1, opacity: 0, offset: 0.01}),
            style({'z-index': 3, opacity: 0, offset: 0.02}),
            style({'z-index': 3, opacity: 1, offset: 0.99}),
        ]))]),
        transition('s3 => s1', [ animate(600, keyframes([
            style({'z-index': 3, opacity: 0, offset: 0.50}),
            style({'z-index': 1, opacity: 0, offset: 0.51}),
            style({'z-index': 1, opacity: 1, offset: 0.99}),
        ]))])
    ])
];
