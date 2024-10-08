const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"教师管理",
			            "menuJump":"列表",
			            "tableName":"jiaoshi"
			        }
			    ],
			    "menu":"教师管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "报表",
			                "审核",
			                "删除"
			            ],
			            "menu":"学生请假管理",
			            "menuJump":"列表",
			            "tableName":"yonghuqingjia"
			        }
			    ],
			    "menu":"学生请假管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"体检服务管理",
			            "menuJump":"列表",
			            "tableName":"tijian"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "修改",
			                "删除"
			            ],
			            "menu":"服务留言管理",
			            "menuJump":"列表",
			            "tableName":"tijianLiuyan"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"服务收藏管理",
			            "menuJump":"列表",
			            "tableName":"tijianCollection"
			        }
			    ],
			    "menu":"体检服务管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "报表",
			                "审核",
			                "删除"
			            ],
			            "menu":"体检预约管理",
			            "menuJump":"列表",
			            "tableName":"tijianYuyue"
			        }
			    ],
			    "menu":"体检预约管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"健康驿站管理",
                        "menuJump":"列表",
                        "tableName":"jiankangyizhan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"驿站留言管理",
                        "menuJump":"列表",
                        "tableName":"jiankangyizhanLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"驿站收藏管理",
                        "menuJump":"列表",
                        "tableName":"jiankangyizhanCollection"
                    }
                ],
                "menu":"健康驿站管理"
            }
			,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"每日健康填报管理",
                        "menuJump":"列表",
                        "tableName":"jiankangtianbao"
                    }
                ],
                "menu":"每日健康填报管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"自测异常信息管理",
			            "menuJump":"列表",
			            "tableName":"ziceyichang"
			        }
			    ],
			    "menu":"自测异常信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"驿站类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiankangyizhan"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"资讯类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"体检服务类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryTijian"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"请假类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryYonghuqingjia"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"隔离状态管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryZiceyichang"
			        }
			    ],
			    "menu":"基础数据管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"校园论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"校园论坛管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"校园健康资讯管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"校园健康资讯管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
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
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "报表",
			                "审核"
			            ],
			            "menu":"学生请假管理",
			            "menuJump":"列表",
			            "tableName":"yonghuqingjia"
			        }
			    ],
			    "menu":"学生请假管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"体检服务管理",
			            "menuJump":"列表",
			            "tableName":"tijian"
			        }
			    ],
			    "menu":"体检服务管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"健康驿站管理",
	                    "menuJump":"列表",
	                    "tableName":"jiankangyizhan"
	                }
	            ],
	            "menu":"健康驿站管理"
	        }
			,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"每日健康填报管理",
	                    "menuJump":"列表",
	                    "tableName":"jiankangtianbao"
	                }
	            ],
	            "menu":"每日健康填报管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"自测异常信息管理",
			            "menuJump":"列表",
			            "tableName":"ziceyichang"
			        }
			    ],
			    "menu":"自测异常信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除"
			            ],
			            "menu":"校园论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"校园论坛管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"校园健康资讯管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"校园健康资讯管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教师",
	    "tableName":"jiaoshi"
	}
]
    }
}
export default menu;
