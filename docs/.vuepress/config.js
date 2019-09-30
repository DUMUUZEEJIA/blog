module.exports = {
	title: '花花世界',
	description: '像草根一样奋斗，像伟人一样思考。',
	themeConfig: {
		nav: [
			{ text: '年轮', link: '/' },
			{
				text: '美女', items: [
					{ text: '挣钱', link: '/guide/work/' },
					{ text: '活着', link: '/language/chinese' },
					{ text: '流浪', link: '/language/japanese' }
				]
			}
		],
		// sidebar: [
		// 	{
		// 		title: '挣钱',
		// 		collapsable: false,
		// 		children: [
		// 			'/work/*'
		// 			// '/work/box'
		// 		]
		// 	}
		// ],
		sidebar: {
			'/guide/work/': [
				'',
				'box',
				'bugsexist'
			]
		},
    // sidebar: {
    //   '/foo/': [
    //     '',     /* /foo/ */
    //     'one',  /* /foo/one.html */
    //     'two'   /* /foo/two.html */
    //   ],

    //   '/bar/': [
    //     '',      /* /bar/ */
    //     'three', /* /bar/three.html */
    //     'four'   /* /bar/four.html */
    //   ],

    //   // fallback
    //   '/': [
    //     '',        /* / */
    //     'contact', /* /contact.html */
    //     'about'    /* /about.html */
    //   ]
		// },
		// sidebar: 'auto',
		configureWebpack: {
			resolve: {
				alias: {
					'@alias': 'public/work/box.png'
				}
			}
		},
    sidebarDepth: 3,
		lastUpdated: 'Last Updated',
	}
}