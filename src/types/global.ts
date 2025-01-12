declare global {
	interface Window {
		Telegram: {
			WebApp: {
				initData: string
				initDataUnsafe: {
					query_id?: string
					user?: {
						id: number
						first_name: string
						last_name?: string
						username?: string
						language_code?: string
					}
					auth_date?: number
					hash?: string
				}
				ready: () => void
				close: () => void
				MainButton: {
					text: string
					color: string
					textColor: string
					show: () => void
					hide: () => void
					enable: () => void
					disable: () => void
					onClick: (callback: () => void) => void
				}
				onEvent: (eventType: string, callback: () => void) => void
				offEvent: (eventType: string, callback: () => void) => void
				themeParams: {
					bg_color: string
					text_color: string
					hint_color: string
					link_color: string
					button_color: string
					button_text_color: string
				}
			}
		}
	}
}
