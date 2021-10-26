self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Covid-19 Status App',
  description: "COVID-19 Status is a free, open-source Android application that shows the current state of COVID-19 in India and the world. It has a beautiful, simple, fast, and responsive UI.",
  image: 'images/covid.jpg',
  tags: ['Java', 'XML', 'Firebase', 'Rest API'],
  source: 'https://github.com/Coders-Of-XDA-OT/covid19-status-android',
  visit: 'https://project.vipuljha.com/covid/',
  id: 0
}, {
  title: 'Portfolio Website',
  description: "This was my personal portfolio website that has all my work and project experience, including my resume. It used to be my main portfolio before deploying this current portfolio.",
  image: 'images/portfolio.jpg',
  tags: ['HTML', 'CSS', 'Bootstrap', 'JQuery'],
  source: 'https://github.com/lordarcadius/website',
  visit: 'https://project.vipuljha.com/website/',
  id: 1
}, {
  title: 'ABS Tweaks',
  description: "ABS Tweaks or Arkaynine Boost Script is a collection of shell scripts written with the aim of enhancing the performance and battery life of an Android phone. It got 2 Lac+ downloads overall.",
  image: '/images/abs.jpg',
  tags: ['Shell', 'Busybox'],
  source: 'https://github.com/lordarcadius/ABS-Tweaks',
  visit: 'https://forum.xda-developers.com/t/tweak-mod-arm-x86-project-dark-booster-abs-tweaks-v5-0-2-3-6-0-23-01-2016.3120404/',
  id: 2
}, {
  title: 'ElectraBlue Kernel',
  description: "ElectraBlue is a flash & forget custom kernel for supported Android devices. It was developed with the aim to provide a stable, fluid, & battery-efficient experience with customizations.",
  image: '/images/eb.jpg',
  tags: ['Linux', 'C', 'Makefile', 'Bash'],
  source: 'https://github.com/lordarcadius/electrablue_mido',
  visit: 'https://forum.xda-developers.com/t/kernel-mido-oreo-pie-electrablue-kernel-21-0-july-06-redmi-note-4.3655651/',
  id: 3
}, {
  title: 'Lenovo SNAPit',
  description: "Lenovo SNAPit Camera was one of the finest OEM camera apps back in those days. It had tonnes of unique and amazing features. I ported it to work on almost all devices at that time.",
  image: '/images/snapit.jpg',
  tags: ['Java', 'Libs', 'Smali'],
  source: '#',
  visit: 'https://forum.xda-developers.com/t/app-port-6-0-lenovo-snapit-camera-5-8-53-for-all-devices.3608065/',
  id: 3
}, {
  title: 'CyanogenOS Apps',
  description: "CyanogenOS 12.1 had a set of exclusive apps like a new theme engine and a new Truecaller integrated dialer. I ported it to work with CyanogenMod 13 and CM 13 based ROMs.",
  image: '/images/capps.jpg',
  tags: ['Java', 'Libs'],
  source: '#',
  visit: 'https://forum.xda-developers.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/',
  id: 3
}, {
  title: 'CyanogenOS Apps',
  description: "CyanogenOS 12.1 had a set of exclusive apps like a new theme engine and a new Truecaller integrated dialer. I ported it to work with CyanogenMod 13 and CM 13 based ROMs.",
  image: '/images/capps.jpg',
  tags: ['Java', 'Libs'],
  source: '#',
  visit: 'https://forum.xda-developers.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/',
  id: 4
}];
var TimeLineData = [{
  year: 2016,
  text: 'Started my journey as a new developer.'
}, {
  year: 2017,
  text: 'Worked intensively on ROMs & Kernels.'
}, {
  year: 2018,
  text: 'Learned Android app development.'
}, {
  year: 2019,
  text: 'Finished Diploma in Computer Engineering.'
}, {
  year: 2020,
  text: 'Got a scholarship from the Delhi government.'
}, {
  year: 2021,
  text: 'Still trying to figure out this weird year.'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFBRSxrTEFGZjtBQUdFQyxPQUFLLEVBQUUsa0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsNERBTFY7QUFNRUMsT0FBSyxFQUFFLHFDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxtQkFEVDtBQUVFQyxhQUFXLEVBQUUsbUxBRmY7QUFHRUMsT0FBSyxFQUFFLHNCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFdBQWhCLEVBQTZCLFFBQTdCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHlDQUxWO0FBTUVDLE9BQUssRUFBRSx1Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLGdNQUZmO0FBR0VDLE9BQUssRUFBRSxpQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixDQUpSO0FBS0VDLFFBQU0sRUFBRSw0Q0FMVjtBQU1FQyxPQUFLLEVBQUUsdUhBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsb0JBRFQ7QUFFRUMsYUFBVyxFQUFFLDRMQUZmO0FBR0VDLE9BQUssRUFBRSxnQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsR0FBVixFQUFlLFVBQWYsRUFBMkIsTUFBM0IsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsa0RBTFY7QUFNRUMsT0FBSyxFQUFFLCtHQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixFQXFDdEI7QUFDRU4sT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFFLHNMQUZmO0FBR0VDLE9BQUssRUFBRSxvQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixDQUpSO0FBS0VDLFFBQU0sRUFBRSxHQUxWO0FBTUVDLE9BQUssRUFBRSxzR0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXJDc0IsRUE4Q3RCO0FBQ0VOLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxhQUFXLEVBQUUsMktBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBSlI7QUFLRUMsUUFBTSxFQUFFLEdBTFY7QUFNRUMsT0FBSyxFQUFFLDBIQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixFQXVEdEI7QUFDRU4sT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSwyS0FGZjtBQUdFQyxPQUFLLEVBQUUsbUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsR0FMVjtBQU1FQyxPQUFLLEVBQUUsMEhBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLENBQWpCO0FBbUVBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLEVBTTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQU4wQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMDA1YWY5ZmM1YTU1YmY4NmJhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdDb3ZpZC0xOSBTdGF0dXMgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJDT1ZJRC0xOSBTdGF0dXMgaXMgYSBmcmVlLCBvcGVuLXNvdXJjZSBBbmRyb2lkIGFwcGxpY2F0aW9uIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgc3RhdGUgb2YgQ09WSUQtMTkgaW4gSW5kaWEgYW5kIHRoZSB3b3JsZC4gSXQgaGFzIGEgYmVhdXRpZnVsLCBzaW1wbGUsIGZhc3QsIGFuZCByZXNwb25zaXZlIFVJLlwiLFxuICAgIGltYWdlOiAnaW1hZ2VzL2NvdmlkLmpwZycsXG4gICAgdGFnczogWydKYXZhJywgJ1hNTCcsICdGaXJlYmFzZScsICdSZXN0IEFQSSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Db2RlcnMtT2YtWERBLU9UL2NvdmlkMTktc3RhdHVzLWFuZHJvaWQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9wcm9qZWN0LnZpcHVsamhhLmNvbS9jb3ZpZC8nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQb3J0Zm9saW8gV2Vic2l0ZScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyB3YXMgbXkgcGVyc29uYWwgcG9ydGZvbGlvIHdlYnNpdGUgdGhhdCBoYXMgYWxsIG15IHdvcmsgYW5kIHByb2plY3QgZXhwZXJpZW5jZSwgaW5jbHVkaW5nIG15IHJlc3VtZS4gSXQgdXNlZCB0byBiZSBteSBtYWluIHBvcnRmb2xpbyBiZWZvcmUgZGVwbG95aW5nIHRoaXMgY3VycmVudCBwb3J0Zm9saW8uXCIsXG4gICAgaW1hZ2U6ICdpbWFnZXMvcG9ydGZvbGlvLmpwZycsXG4gICAgdGFnczogWydIVE1MJywgJ0NTUycsICdCb290c3RyYXAnLCAnSlF1ZXJ5J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2xvcmRhcmNhZGl1cy93ZWJzaXRlJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcHJvamVjdC52aXB1bGpoYS5jb20vd2Vic2l0ZS8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBQlMgVHdlYWtzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBQlMgVHdlYWtzIG9yIEFya2F5bmluZSBCb29zdCBTY3JpcHQgaXMgYSBjb2xsZWN0aW9uIG9mIHNoZWxsIHNjcmlwdHMgd3JpdHRlbiB3aXRoIHRoZSBhaW0gb2YgZW5oYW5jaW5nIHRoZSBwZXJmb3JtYW5jZSBhbmQgYmF0dGVyeSBsaWZlIG9mIGFuIEFuZHJvaWQgcGhvbmUuIEl0IGdvdCAyIExhYysgZG93bmxvYWRzIG92ZXJhbGwuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Ficy5qcGcnLFxuICAgIHRhZ3M6IFsnU2hlbGwnLCAnQnVzeWJveCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb3JkYXJjYWRpdXMvQUJTLVR3ZWFrcycsXG4gICAgdmlzaXQ6ICdodHRwczovL2ZvcnVtLnhkYS1kZXZlbG9wZXJzLmNvbS90L3R3ZWFrLW1vZC1hcm0teDg2LXByb2plY3QtZGFyay1ib29zdGVyLWFicy10d2Vha3MtdjUtMC0yLTMtNi0wLTIzLTAxLTIwMTYuMzEyMDQwNC8nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFbGVjdHJhQmx1ZSBLZXJuZWwnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVsZWN0cmFCbHVlIGlzIGEgZmxhc2ggJiBmb3JnZXQgY3VzdG9tIGtlcm5lbCBmb3Igc3VwcG9ydGVkIEFuZHJvaWQgZGV2aWNlcy4gSXQgd2FzIGRldmVsb3BlZCB3aXRoIHRoZSBhaW0gdG8gcHJvdmlkZSBhIHN0YWJsZSwgZmx1aWQsICYgYmF0dGVyeS1lZmZpY2llbnQgZXhwZXJpZW5jZSB3aXRoIGN1c3RvbWl6YXRpb25zLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9lYi5qcGcnLFxuICAgIHRhZ3M6IFsnTGludXgnLCAnQycsICdNYWtlZmlsZScsICdCYXNoJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2xvcmRhcmNhZGl1cy9lbGVjdHJhYmx1ZV9taWRvJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZm9ydW0ueGRhLWRldmVsb3BlcnMuY29tL3Qva2VybmVsLW1pZG8tb3Jlby1waWUtZWxlY3RyYWJsdWUta2VybmVsLTIxLTAtanVseS0wNi1yZWRtaS1ub3RlLTQuMzY1NTY1MS8nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdMZW5vdm8gU05BUGl0JyxcbiAgICBkZXNjcmlwdGlvbjogXCJMZW5vdm8gU05BUGl0IENhbWVyYSB3YXMgb25lIG9mIHRoZSBmaW5lc3QgT0VNIGNhbWVyYSBhcHBzIGJhY2sgaW4gdGhvc2UgZGF5cy4gSXQgaGFkIHRvbm5lcyBvZiB1bmlxdWUgYW5kIGFtYXppbmcgZmVhdHVyZXMuIEkgcG9ydGVkIGl0IHRvIHdvcmsgb24gYWxtb3N0IGFsbCBkZXZpY2VzIGF0IHRoYXQgdGltZS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvc25hcGl0LmpwZycsXG4gICAgdGFnczogWydKYXZhJywgJ0xpYnMnLCAnU21hbGknXSxcbiAgICBzb3VyY2U6ICcjJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZm9ydW0ueGRhLWRldmVsb3BlcnMuY29tL3QvYXBwLXBvcnQtNi0wLWxlbm92by1zbmFwaXQtY2FtZXJhLTUtOC01My1mb3ItYWxsLWRldmljZXMuMzYwODA2NS8nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDeWFub2dlbk9TIEFwcHMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkN5YW5vZ2VuT1MgMTIuMSBoYWQgYSBzZXQgb2YgZXhjbHVzaXZlIGFwcHMgbGlrZSBhIG5ldyB0aGVtZSBlbmdpbmUgYW5kIGEgbmV3IFRydWVjYWxsZXIgaW50ZWdyYXRlZCBkaWFsZXIuIEkgcG9ydGVkIGl0IHRvIHdvcmsgd2l0aCBDeWFub2dlbk1vZCAxMyBhbmQgQ00gMTMgYmFzZWQgUk9Ncy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvY2FwcHMuanBnJyxcbiAgICB0YWdzOiBbJ0phdmEnLCAnTGlicyddLFxuICAgIHNvdXJjZTogJyMnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9mb3J1bS54ZGEtZGV2ZWxvcGVycy5jb20vdC9jLWFwcHMtdjItdW5vZmZpY2lhbC02LTAteC1jeWFub2dlbi1vcy1jYXBwcy12Mi1mb3ItY20xMy1hbmQtY20xMy1iYXNlZC1yb21zLjMyNTQ4NjUvJyxcbiAgICBpZDogMyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ3lhbm9nZW5PUyBBcHBzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJDeWFub2dlbk9TIDEyLjEgaGFkIGEgc2V0IG9mIGV4Y2x1c2l2ZSBhcHBzIGxpa2UgYSBuZXcgdGhlbWUgZW5naW5lIGFuZCBhIG5ldyBUcnVlY2FsbGVyIGludGVncmF0ZWQgZGlhbGVyLiBJIHBvcnRlZCBpdCB0byB3b3JrIHdpdGggQ3lhbm9nZW5Nb2QgMTMgYW5kIENNIDEzIGJhc2VkIFJPTXMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2NhcHBzLmpwZycsXG4gICAgdGFnczogWydKYXZhJywgJ0xpYnMnXSxcbiAgICBzb3VyY2U6ICcjJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZm9ydW0ueGRhLWRldmVsb3BlcnMuY29tL3QvYy1hcHBzLXYyLXVub2ZmaWNpYWwtNi0wLXgtY3lhbm9nZW4tb3MtY2FwcHMtdjItZm9yLWNtMTMtYW5kLWNtMTMtYmFzZWQtcm9tcy4zMjU0ODY1LycsXG4gICAgaWQ6IDQsXG4gIH0sXG5cbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNiwgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leSBhcyBhIG5ldyBkZXZlbG9wZXIuJywgfSxcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnV29ya2VkIGludGVuc2l2ZWx5IG9uIFJPTXMgJiBLZXJuZWxzLicsIH0sXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogJ0xlYXJuZWQgQW5kcm9pZCBhcHAgZGV2ZWxvcG1lbnQuJywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRmluaXNoZWQgRGlwbG9tYSBpbiBDb21wdXRlciBFbmdpbmVlcmluZy4nLCB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdHb3QgYSBzY2hvbGFyc2hpcCBmcm9tIHRoZSBEZWxoaSBnb3Zlcm5tZW50LicsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0aWxsIHRyeWluZyB0byBmaWd1cmUgb3V0IHRoaXMgd2VpcmQgeWVhci4nLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9