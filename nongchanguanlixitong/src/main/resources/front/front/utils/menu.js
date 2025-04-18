const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-message",
                        "buttons":[
                            "查看"
                        ],
                        "menu":"客服聊天",
                        "menuJump":"列表",
                        "tableName":"chat"
                    }
                ],
                "menu":"客服聊天"
            }
            ,
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-activity",
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告通知",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告通知"
            }
			,
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"农场信息",
                        "menuJump":"列表",
                        "tableName":"nongchang"
                    }
                ],
                "menu":"农场信息"
            }
            ,
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-favor",
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"农场收藏",
                        "menuJump":"列表",
                        "tableName":"nongchangCollection"
                    }
                ],
                "menu":"农场收藏"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;
