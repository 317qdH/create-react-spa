import React, { Component } from 'react';
import { Top, Bottom } from '@routers/loadable';

// import Top from '@components/top';
// import Bottom from '@components/bottom';

// const routerConfig = [
//     {
//         path: '/',
//         component: Top,
//         exact: true
//     },
//     {
//         path: '/bottom',
//         component: Bottom,
//         exact: true,
//         routes:[
//             {
//                 path:'/content',
//                 component:Top
//             }
//         ]
//     }
// ]

const routerConfig = [
    {
      path: "/",
      exact: true,
      component: Top
    },
    {
      path: "/bottom",
      component: Bottom,
      routes: [
        {
          path: "/bottom/content",
          component: Top
        },
        {
          path: "/bottom/name",
          component: <div>name</div>
        },
      ]
    }
  ];

export {routerConfig}