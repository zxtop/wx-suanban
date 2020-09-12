require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(171);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd9b942e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(186);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(172)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd9b942e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\subject\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd9b942e", Component.options)
  } else {
    hotAPI.reload("data-v-bd9b942e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CBg__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_dist_notify_notify__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CGhost__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CBox__ = __webpack_require__(182);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //@是mpvue的一个别名，指向src目录



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            dt_img: '/static/images/dt.png',
            question_index: 0, //当前展示的第几题
            params: {
                subject_id: 20,
                term_id: 0,
                type_ids: [],
                version_id: 0,
                difficulty: 0,
                knowledge_points: [],
                page: 1,
                chapters: [],
                abilities: [],
                teacher_id: 0
            }, //查询条件
            question_types_xx: [85, 88], // 单选和判断 (小学的题目类型)
            uid: "37",
            u_yes_num: 0, //当前用户作对的题目数量
            u_gold_count: 0,
            questionForm: {}, //页面展示题目的实体
            questionslist: [], //返回的题库

            yes_no_option: [{ text: "对", isactive: false, checkmark: false, close: false }, { text: "错", isactive: false, checkmark: false, close: false }],
            choice_option: [{ text: "A", isactive: false, checkmark: false, close: false }, { text: "B", isactive: false, checkmark: false, close: false }, { text: "C", isactive: false, checkmark: false, close: false }, { text: "D", isactive: false, checkmark: false, close: false }],
            checkmark: false, // 对号的图标  默认不显示
            close: false, // 查号的图标  默认不显示
            u_level: 0,
            fail: false, //挑战失败
            success: false //挑战成功

        };
    },

    components: {
        CBg: __WEBPACK_IMPORTED_MODULE_0__components_CBg__["a" /* default */],
        CGhost: __WEBPACK_IMPORTED_MODULE_3__components_CGhost__["a" /* default */],
        CBox: __WEBPACK_IMPORTED_MODULE_4__components_CBox__["a" /* default */]
    },
    created: function created() {},

    computed: {
        proess_in: function proess_in() {
            return this.question_index * 10;
        }
    },
    mounted: function mounted() {
        var _this = this;

        var _that = this;
        this.params.term_id = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.user.termId;
        this.params.difficulty = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubject.difficulty;
        console.log('当前题目租的params.....', this.params);
        this.uid = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.user.uid;
        this.u_gold_count = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.user.money;

        this.$httpWX.post({
            url: '/api/v1/teacher-questions/error/query',
            data: this.params
        }).then(function (res) {
            _this.questionslist = [];
            console.log(res, "试题加载完毕。。。。。。。");
            res.data.map(function (item, index) {
                // console.log(item.content)
                item.content = _that.imgTagAddStyle(item.content);
                if (item.content) {
                    item.content = item.content.replace(new RegExp('http://daincy.iok.la:81', 'g'), 'https://api.tk.ejex.net');
                }
                if (item.option) {
                    item.option = item.option.replace(new RegExp('http://daincy.iok.la:81', 'g'), 'https://api.tk.ejex.net');
                }
                if (item.answer[0]) {
                    if (item.answer[0].indexOf('对') > -1 || item.answer[0].indexOf('错') > -1) {
                        item.type = {
                            name: '判断题'
                        };
                    } else {
                        item.type = {
                            name: '单选题'
                        };
                    }
                }
            });
            _this.questionslist = res.data;
            _this.showQuestion();
        });
    },

    methods: {
        beginQuestionClick: function beginQuestionClick() {
            var _this2 = this;

            var _that = this;
            this.fail = false;
            this.success = false;
            this.u_yes_num = 0;

            this.params.term_id = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.user.termId;
            this.params.difficulty = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubject.difficulty;
            console.log('当前题目租的params.....', this.params);
            this.uid = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.user.uid;
            this.u_gold_count = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.user.money;

            this.$httpWX.post({
                url: '/api/v1/teacher-questions/error/query',
                data: this.params
            }).then(function (res) {
                _this2.questionslist = [];
                console.log(res, "试题加载完毕。。。。。。。");

                res.data.map(function (item, index) {
                    item.content = _that.imgTagAddStyle(item.content);

                    if (item.content) {
                        item.content = item.content.replace(new RegExp('http://daincy.iok.la:81', 'g'), 'https://api.tk.ejex.net');
                    }
                    if (item.option) {
                        item.option = item.option.replace(new RegExp('http://daincy.iok.la:81', 'g'), 'https://api.tk.ejex.net');
                    }
                    if (item.answer[0]) {
                        if (item.answer[0].indexOf('对') > -1 || item.answer[0].indexOf('错') > -1) {
                            item.type = {
                                name: '判断题'
                            };
                        } else {
                            item.type = {
                                name: '单选题'
                            };
                        }
                    }
                });
                _this2.questionslist = res.data;
                _this2.showQuestion();
            });
        },
        showQuestion: function showQuestion() {
            this.questionForm = this.questionslist[0];
            this.question_index = 0;
        },
        handleBtmClick: function handleBtmClick(data) {
            // console.log(data,"点击选项");
            if (data.text == this.questionForm.answer) {
                //回答正确
                data.checkmark = true;
                this.u_yes_num += 1;
                this.updataUserData(); //更新用户成绩
                this.addUserQuestion(this.uid, this.questionForm._id, true); //记录正确答案
            } else {
                data.close = true; //回答错误
                this.addUserQuestion(this.uid, this.questionForm._id, false); //记录错误答案
            }

            this.yes_no_option.forEach(function (obj) {
                obj.isactive = true;
            });
            this.choice_option.forEach(function (obj) {
                obj.isactive = true;
            });

            //切换下一题
            this.nextQuestion();
        },
        updataUserData: function updataUserData() {
            if (this.u_yes_num == 10) {
                this.u_level += 1;
            }

            this.u_gold_count += 10;
            var studentInfo = {
                studentId: this.uid,
                level: this.u_level,
                goldCount: this.u_gold_count
            };

            __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].commit("SET_GOLD", studentInfo);

            this.$httpWX.post_a({
                url: '/api/systemconfig/student/update_student_levelgold',
                data: studentInfo
            }).then(function (res) {
                console.log(res, "更新等级和金币");
            });

            // 存入store显示
            // this.$store.commit("SAVE_GAME")
        },
        addUserQuestion: function addUserQuestion(uid, _id, type) {
            //记录答案信息
            if (type) {
                this.$httpWX.post_a({
                    url: '/api/systemconfig/student/add_student_point_yes?userId=' + uid + '&titleId=' + _id
                }).then(function (res) {
                    console.log('回答正确...', res);
                });
            } else {
                //添加到错题
                var StudentPointNo = {
                    studentId: uid,
                    titleId: _id,
                    subjectId: this.questionForm.subject ? this.questionForm.subject.id : '',
                    typeId: this.questionForm.type ? this.questionForm.type.id : '',
                    difficulty: this.questionForm.difficulty,
                    versionId: 0,
                    termId: this.questionForm.term ? this.questionForm.term.id : ''
                };

                this.$httpWX.post_a({
                    url: '/api/systemconfig/student/add_student_point_no',
                    data: StudentPointNo
                }).then(function (res) {
                    console.log('回答错误...', res);
                });
            }
        },


        //切换下一个题目
        nextQuestion: function nextQuestion() {
            var _that = this;
            Object(__WEBPACK_IMPORTED_MODULE_2__static_dist_notify_notify__["a" /* default */])({ type: 'primary', message: '下一题', onClose: function onClose() {
                    _that.yes_no_option.forEach(function (obj) {
                        obj.isactive = false;
                        obj.checkmark = false;
                        obj.close = false;
                    });
                    _that.choice_option.forEach(function (obj) {
                        obj.isactive = false;
                        obj.checkmark = false;
                        obj.close = false;
                    });
                    _that.question_index += 1;
                    if (_that.question_index == 10) {
                        _that.showResult();
                    } else {
                        _that.questionForm = _that.questionslist[_that.question_index];
                    }
                } });
        },


        //做完10道题的结果
        showResult: function showResult() {
            this.questionslist = null;
            this.question_index = 0;
            console.log('最终结果是：' + this.u_yes_num);
            if (this.u_yes_num == 10) {
                console.log("全部答对");
                this.success = true;
                //激活下一关
                // this.$store.dispatch("activenewleve", this.$store.state.currSubjectId);
                this.activenewleve();
            } else {
                console.log("继续加油");
                this.fail = true;
            }
        },


        //激活下一关
        activenewleve: function activenewleve() {
            // 当前关卡的名字
            var name = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubject.name;
            // 设置当前关卡为已通过
            if (__WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubject.learning === 1) {
                __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubject.learning = 2;
                //当前 关卡的 Index
                var pIndex = '';
                __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.subjectList[__WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubjectId].list.forEach(function (obj, index) {
                    if (obj.name == name) {
                        pIndex = index;
                    }
                });
                if (pIndex < __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.subjectList[__WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubjectId].list.length - 1) {
                    // console.log("比较。。。。。");
                    __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubject = __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.subjectList[__WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubjectId].list[pIndex + 1];
                    __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.currSubject.learning = 1;
                    // Vue.prototype.$popUp('激活关卡', state.currSubject.name);
                    // Notify({ type: 'success', message: '激活关卡'+ store.state.currSubject.name });
                } else {
                    console.log('最后一题。。。。');
                    return;
                }
            }
        },
        imgTagAddStyle: function imgTagAddStyle(htmlstr) {
            // 正则匹配所有img标签
            // var regex0 = new RegExp("(i?)(\<img)([^\>]+\>)","gmi");
            // 正则匹配不含style="" 或 style='' 的img标签
            // eslint-disable-next-line no-useless-escape
            var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", 'gmi');
            // 给不含style="" 或 style='' 的img标签加上style=""
            htmlstr = htmlstr.replace(regex1, '$2 style=""$3');
            // console.log('增加style=""后的html字符串：' + htmlstr)
            // 正则匹配含有style的img标签
            // eslint-disable-next-line no-useless-escape
            var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", 'gmi');
            // 在img标签的style里面增加css样式(这里增加的样式：display:block;max-width:100%;height:auto;border:5px solid red;)
            htmlstr = htmlstr.replace(regex2, '$2max-width:100%;height:auto;$3');
            // console.log('在img标签的style里面增加样式后的html字符串：' + htmlstr)
            return htmlstr;
        }
    }
});

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CBg_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7486238c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_CBg_vue__ = __webpack_require__(177);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(175)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7486238c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CBg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7486238c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_CBg_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\CBg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CBg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7486238c", Component.options)
  } else {
    hotAPI.reload("data-v-7486238c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            baseImg: [{ img: '../../static/images/subject_bg/bg1.png' }, { img: '../../static/images/subject_bg/bg2.png' }, { img: '../../static/images/subject_bg/bg3.png' }, { img: '../../static/images/subject_bg/bg4.png' }, { img: '../../static/images/subject_bg/bg5.png' }]
        };
    },

    computed: {
        random: function random() {
            return this.baseImg[Math.floor(Math.random() * this.baseImg.length + 1) - 1].img;
        }
    },
    created: function created() {
        // console.log(this.random)
    }
});

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "subject_bg"
  }, [_c('img', {
    attrs: {
      "src": _vm.random
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7486238c", esExports)
  }
}

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CGhost_vue__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_99118aac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_CGhost_vue__ = __webpack_require__(181);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-99118aac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CGhost_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_99118aac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_CGhost_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\CGhost.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CGhost.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99118aac", Component.options)
  } else {
    hotAPI.reload("data-v-99118aac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ghost',
    data: function data() {
        return {};
    },

    methods: {
        reLoadQUesionts: function reLoadQUesionts() {
            console.log('1111111');
            this.$emit('outResetQuestionList', false);
        }
    }
});

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ghost"
  }, [_c('h1', [_vm._v("挑战失败！继续努力哦")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "shadow"
  }), _vm._v(" "), _c('div', {
    staticClass: "dan_btn",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('van-button', {
    attrs: {
      "type": "danger",
      "round": "",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.reLoadQUesionts
    }
  }, [_vm._v("继续闯关")])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "body"
  }, [_c('div', {
    staticClass: "face_ghost"
  }, [_c('div', {
    staticClass: "eye left"
  }), _vm._v(" "), _c('div', {
    staticClass: "eye right"
  }), _vm._v(" "), _c('div', {
    staticClass: "smile"
  }), _vm._v(" "), _c('div', {
    staticClass: "rosy left"
  }), _vm._v(" "), _c('div', {
    staticClass: "rosy right"
  })]), _vm._v(" "), _c('div', {
    staticClass: "arm left"
  }), _vm._v(" "), _c('div', {
    staticClass: "arm right"
  }), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div'), _vm._v(" "), _c('div'), _vm._v(" "), _c('div'), _vm._v(" "), _c('div'), _vm._v(" "), _c('div')])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-99118aac", esExports)
  }
}

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CBox_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0379b4a6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_CBox_vue__ = __webpack_require__(185);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0379b4a6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_CBox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\CBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0379b4a6", Component.options)
  } else {
    hotAPI.reload("data-v-0379b4a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_index__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: "box",
    data: function data() {
        return {
            reward: {},
            isNextProject: false,
            isclick: false,
            imgData: '/assets/images/chest.png',
            showimg: true
        };
    },
    created: function created() {
        var name = __WEBPACK_IMPORTED_MODULE_0__store_index__["a" /* default */].state.currSubject.name;
        //当前 关卡的 Index
        var pIndex = '';
        __WEBPACK_IMPORTED_MODULE_0__store_index__["a" /* default */].state.subjectList[__WEBPACK_IMPORTED_MODULE_0__store_index__["a" /* default */].state.currSubjectId].list.forEach(function (obj, index) {
            if (obj.name == name) {
                pIndex = index;
            }
        });
        if (pIndex == __WEBPACK_IMPORTED_MODULE_0__store_index__["a" /* default */].state.subjectList[__WEBPACK_IMPORTED_MODULE_0__store_index__["a" /* default */].state.currSubjectId].list.length - 1) {
            this.isNextProject = true;
        } else {
            this.isNextProject = false;
        }
    },


    methods: {
        openBox: function openBox(e) {
            if (!this.isclick) {
                this.isclick = true;
                this.getReward();
                this.showimg = false;
            } else {
                return;
            }
        },
        getReward: function getReward() {
            this.reward = __WEBPACK_IMPORTED_MODULE_0__store_index__["a" /* default */].state.foods[this.getRandomNumber(7)];
            console.log(this.reward, "奖励。。。");
            __WEBPACK_IMPORTED_MODULE_0__store_index__["a" /* default */].commit("GET_GOOD", this.reward);
        },
        getRandomNumber: function getRandomNumber(num) {
            return Math.floor(Math.random() * num);
        },
        reLoadQUesionts: function reLoadQUesionts() {
            this.$emit('outResetQuestionList', false);
        },
        reLoadNextProject: function reLoadNextProject() {
            console.log('前往下一个科目。。。。。');
            this.$emit('outQuestionList', false);
        }
    }
});

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "open-body"
  }, [_c('div', {
    staticClass: "wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    ref: "open_has",
    staticClass: "open-has",
    class: {
      opened: _vm.isclick
    }
  }, [_c('h3', {
    staticClass: "title-close"
  }, [_c('span', {
    staticClass: "user"
  }, [_vm._v("闯关成功")]), _vm._v("您获得了一个宝箱\n            ")]), _vm._v(" "), _c('h3', {
    staticClass: "title-open"
  }, [_vm._v("\n                恭喜你，\n                "), _c('br'), _vm._v("成功领取\n                "), _c('span', {
    staticClass: "user"
  }, [_vm._v("奖励")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mod-chest"
  }, [_c('div', {
    staticClass: "chest-close show",
    class: {
      shake: _vm.isclick
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.openBox
    }
  }, [_c('div', {
    staticClass: "gift"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showimg),
      expression: "showimg"
    }],
    staticStyle: {
      "width": "134px",
      "height": "94px"
    },
    attrs: {
      "src": "../assets/images/chest.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showimg),
      expression: "!showimg"
    }],
    staticStyle: {
      "width": "134px",
      "height": "94px"
    },
    attrs: {
      "src": "../assets/images/chest2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "arrow"
  }, [_c('img', {
    staticStyle: {
      "width": "240px",
      "height": "80px"
    },
    attrs: {
      "src": "../assets/images/txt-tips-open.png",
      "alt": ""
    }
  })])], 1)]), _vm._v(" "), _c('div', {
    ref: "chest_open",
    staticClass: "chest-open",
    class: {
      show: _vm.isclick
    }
  }, [_c('div', {
    staticClass: "mod-chest-cont open-cont"
  }, [_c('div', {
    staticClass: "content1"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('img', {
    staticStyle: {
      "width": "70px",
      "height": "40px"
    },
    attrs: {
      "src": _vm.reward.url
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "gift"
  }, [_vm._v("\n                                " + _vm._s(_vm.reward.name) + "\n                            ")])])]), _vm._v(" "), (!_vm.isNextProject) ? _c('van-button', {
    attrs: {
      "type": "primary",
      "custom-style": "margin-top:130px",
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.reLoadQUesionts
    }
  }, [_vm._v("继续闯关")]) : _vm._e()], 1)])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg rotate"
  }, [_c('img', {
    attrs: {
      "src": "../assets/images/light.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0379b4a6", esExports)
  }
}

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "subject-wrap"
  }, [_c('CBg', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), (!_vm.fail && !_vm.success) ? _c('div', {
    staticClass: "questionform"
  }, [_c('div', {
    staticClass: "title_bg"
  }, [_c('img', {
    attrs: {
      "src": _vm.dt_img,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.question_index) + "/10")])]), _vm._v(" "), _c('div', {
    staticClass: "question_pro_ifo"
  }, [_c('div', {
    staticClass: "question_proess"
  }, [_c('div', {
    staticClass: "proess_out"
  }, [_c('van-progress', {
    staticClass: "vanpro",
    attrs: {
      "percentage": _vm.proess_in,
      "color": "#59db08",
      "stroke-width": "10px",
      "show-pivot": "false",
      "mpcomid": '1'
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "text-main2"
  }, [_c('div', {
    staticClass: "main2_content",
    staticStyle: {
      "height": "500px",
      "overflow-y": "auto"
    }
  }, [_c('div', {
    staticClass: "showQuestion"
  }, [_c('div', {
    staticClass: "question_content",
    staticStyle: {
      "font-size": "14px"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.questionForm.content)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "questio_option"
  }, [_c('p', {
    staticStyle: {
      "font-size": "14px"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.questionForm.option)
    }
  })], 1)]), _vm._v(" "), (_vm.questionForm.type && _vm.questionForm.type.name == '判断题') ? _c('div', {
    staticClass: "select_judge"
  }, [_c('ul', {
    ref: "btn_out1",
    attrs: {
      "id": "btn_out1"
    }
  }, _vm._l((_vm.yes_no_option), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "btn"
    }, [_c('div', {
      staticClass: "loading-dock"
    }, [_c('button', {
      staticClass: "submit",
      class: {
        wrong: item.close, correct: item.checkmark
      },
      attrs: {
        "disabled": item.isactive,
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleBtmClick(item)
        }
      }
    }, [_c('span', [(item.checkmark) ? _c('van-icon', {
      attrs: {
        "name": "success",
        "mpcomid": '2_' + index
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('span', [(item.close) ? _c('van-icon', {
      attrs: {
        "name": "cross",
        "mpcomid": '3_' + index
      }
    }) : _vm._e()], 1), _vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])], 1)])
  }))], 1) : _vm._e(), _vm._v(" "), (_vm.questionForm.type && _vm.questionForm.type.name != '判断题') ? _c('div', {
    staticClass: "select_option"
  }, [_c('ul', {
    ref: "btn_out2",
    attrs: {
      "id": "btn_out2"
    }
  }, _vm._l((_vm.choice_option), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "btn"
    }, [_c('div', {
      staticClass: "loading-dock"
    }, [_c('button', {
      staticClass: "submit",
      class: {
        wrong: item.close, correct: item.checkmark
      },
      attrs: {
        "disabled": item.isactive,
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleBtmClick(item)
        }
      }
    }, [_c('span', [(item.checkmark) ? _c('van-icon', {
      attrs: {
        "name": "success",
        "mpcomid": '4_' + index
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('span', [(item.close) ? _c('van-icon', {
      attrs: {
        "name": "cross",
        "mpcomid": '5_' + index
      }
    }) : _vm._e()], 1), _vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])], 1)])
  }))], 1) : _vm._e()])])]) : _vm._e(), _vm._v(" "), (_vm.fail) ? _c('div', {
    staticClass: "result_fail"
  }, [_c('c-ghost', {
    attrs: {
      "eventid": '2',
      "mpcomid": '6'
    },
    on: {
      "outResetQuestionList": _vm.beginQuestionClick
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.success) ? _c('div', {
    staticClass: "result_success"
  }, [_c('c-box', {
    attrs: {
      "eventid": '3',
      "mpcomid": '7'
    },
    on: {
      "outResetQuestionList": _vm.beginQuestionClick,
      "outQuestionList": _vm.hideSubject
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '8'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd9b942e", esExports)
  }
}

/***/ })

},[170]);