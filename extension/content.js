/* ==========================================
   FactCheckAI - Chrome Extension Content Script
   ========================================== */

// Listen for requests from the Extension Popup or Background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.method === "getSelection") {
        const selectedText = window.getSelection().toString().trim();
        sendResponse({ text: selectedText });
    } else {
        sendResponse({});
    }
});
