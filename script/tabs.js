// document.addEventListener("DOMContentLoaded", function () {
//     const tabSpecsBtn = document.getElementById("tab-specs");
//     const tabComplectationsBtn = document.getElementById("tab-complectations");
//     const contentSpecs = document.getElementById("content-specs");
//     const contentComplectations = document.getElementById("content-complectations");

//     function showTab(tab) {
//         if (tabSpecsBtn && tabComplectationsBtn && contentSpecs && contentComplectations) {
//             tabSpecsBtn.classList.remove("bg-blue-100", "text-[#4886FF]");
//             tabSpecsBtn.classList.add("bg-white", "text-gray-600");
//             tabComplectationsBtn.classList.remove("bg-blue-100", "text-[#4886FF]");
//             tabComplectationsBtn.classList.add("bg-white", "text-gray-600");
//             contentSpecs.classList.add("hidden");
//             contentComplectations.classList.add("hidden");

//             if (tab === "specs") {
//                 contentSpecs.classList.remove("hidden");
//                 tabSpecsBtn.classList.remove("bg-white", "text-gray-600");
//                 tabSpecsBtn.classList.add("bg-blue-100", "text-[#4886FF]");
//             } else if (tab === "complectations") {
//                 contentComplectations.classList.remove("hidden");
//                 tabComplectationsBtn.classList.remove("bg-white", "text-gray-600");
//                 tabComplectationsBtn.classList.add("bg-blue-100", "text-[#4886FF]");
//             }
//         }
//     }

//     if (tabSpecsBtn) {
//         tabSpecsBtn.addEventListener("click", () => showTab("specs"));
//     }
//     if (tabComplectationsBtn) {
//         tabComplectationsBtn.addEventListener("click", () => showTab("complectations"));
//     }

//     if (contentComplectations) {
//         showTab("complectations");
//     }
// });