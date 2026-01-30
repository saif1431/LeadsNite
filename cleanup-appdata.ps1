# Read the file
$content = Get-Content 'd:\LeadsNite\src\pages\serviceData.js' -Raw

# Define the replacement for appData section
$appDataReplacement = @'
export const appData = {
  relatedProjects: [
    { id: 3, title: "YumBite App", image: "/Projects/Mobile Application/YumBites/projectImg4.webp", link: "/app-projects/yumbite-app" },
    { id: 4, title: "SafeBite App", image: "/Projects/Mobile Application/project 1/thumnail.webp ", link: "/app-projects/safebite-app" },
    { id: 5, title: "Cart n Mart App", image: "/Projects/Mobile Application/project 2/thumnail.webp", link: "/app-projects/cart-n-mart-app" },
    { id: 6, title: "CampusKart App", image: "/Projects/Mobile Application/project 3/thumnai.webp", link: "/app-projects/campuskart-app" },
    { id: 7, title: "LifeLine Connect App", image: "/Projects/Mobile Application/project 4/thumnail.webp", link: "/app-projects/lifeline-connect-app" },
    { id: 17, title: "Culina App", image: "/Projects/Mobile Application/project 5/thumnail.webp", link: "/app-projects/culina-app" },
    { id: 18, title: "FlowRider Smart Delivery Companion App", image: "/Projects/Mobile Application/project 6/thumnail.webp", link: "/app-projects/flowrider-smart-delivery-companion-app" },
    { id: 19, title: "LearnU – Smart Learning Reimagined App", image: "/Projects/Mobile Application/project 7/thumnail.png", link: "/app-projects/learnu-smart-learning-reimagined-app" },
    { id: 20, title: "CarPoolin App", image: "/Projects/Mobile Application/project 8/thumnail.png", link: "/app-projects/carpoolin-app" },
  ],
};
'@

# Use regex to replace the appData section
$pattern = '(?s)export const appData = \{.*?\};'
$newContent = $content -replace $pattern, $appDataReplacement

# Write the updated content
$newContent | Set-Content 'd:\LeadsNite\src\pages\serviceData.js' -NoNewline
Write-Host "appData section updated successfully!"
