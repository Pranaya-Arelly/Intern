const leftPanelBtn = document.querySelector('.panelHead i');
const leftPanel = document.querySelector('.leftPanel');
const ul = document.querySelector('#ul');
const one = document.querySelector('.one');

function gsapEffect() {
    gsap.from(leftPanel, {
        delay: 0.5,
        x: -110,
        duration: 0.5,

    });

    gsap.from(".rightPanel", {
        delay: 0.5,
        x: 100,
        duration: 0.5,

    });

    gsap.from(".Explore , .Technical, .card", {
        delay: 0.2,
        scale: .9,
        duration: 0.5,
        opacity: 0,
        zIndex: 5,
    });

    gsap.from(".navItems li", {
        delay: 0.2,
        y: -50,
        duration: .8,
        opacity: 0,
        stagger: 0.12,
        ease: "elastic.out(.4,0.5)"
    });
}
gsapEffect();
const tl = gsap.timeline({ paused: true });

leftPanelBtn.addEventListener('click', () => {
    if (leftPanelBtn.className === "ri-arrow-right-circle-fill") {
        ul.style.opacity = 1;
        one.style.opacity = 0;
        leftPanelBtn.classList.replace("ri-arrow-right-circle-fill", "ri-arrow-left-circle-fill");
        
        tl.to(leftPanel, {
            left: 0,
            duration: 0.3
        });

        tl.from("#ulbody li", {
            x: -100,
            duration: 0.2,
            stagger: 0.12,
            opacity: 0
        });
    } else {
        one.style.opacity = 1;
        leftPanelBtn.classList.replace("ri-arrow-left-circle-fill", "ri-arrow-right-circle-fill");
        
        tl.to(ul, {
            x: -6,
            opacity: 0,
            duration: 0.3,
        });

        tl.to(leftPanel, {
            left: -285,
            duration: 0.3,
        });
    }

    tl.play();  // Play the timeline animation
});
const url = 'http://localhost:3000/task/18882';
function fetchJSONData(taskId) {
  fetch(`${url}${taskId}`)
      .then((res) => {
          if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
      })
      .then((data) => {
          // Handle the data
          const task = data;
          // Example of updating the frontend with the fetched data
          document.getElementById('task-title').innerText = task.task_title;
          document.getElementById('task-description').innerText = task.task_description;
          // Render assets
          task.assets.forEach(asset => {
              document.getElementById('asset-container').innerHTML += renderAsset(asset);
          });
      })
      .catch((error) => console.error("Unable to fetch data:", error));
}

// Example usage: fetch data for task with ID 18882
//fetchJSONData(18882);

function fetchJSONData() {
    cardId = [18882, 18883, 18884, 18885, 18886];

    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const task = data.tasks[0];
            task.assets.forEach(element => {
                cardId.forEach(e => {
                    const titleElement = document.getElementById(`${e}`);

                    if (titleElement.id == task.task_id) {   
                        titleElement.children[0].innerHTML = `<h3>${task.task_title}</h3>`;               
                        document.querySelector('#panelBodyTitle').innerHTML = `${task.task_title}`;
                        titleElement.children[1].innerHTML = <p>${task.task_description.replaceAll(/\r\n/g, '')}</p>;
                    }

                    if (titleElement.id == element.asset_id) {
                        titleElement.children[0].innerHTML = `<h2>${element.asset_title}</h2> <i class="ri-information-2-fill"></i>`;
                        document.getElementById(`J${e}`).innerHTML =`${element.asset_title}`;
                        titleElement.children[1].innerHTML = <p> <span class="bold">Description : </span>${element.asset_description.replaceAll(/\r\n/g, '')}</p>;
                    }
                });
            });
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();
function renderAsset(asset) {
    return `
      <div class="asset">
        <h2>${asset.name}</h2>
        <p>${asset.description}</p>
      </div>
    `;
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Example JSON data; in a real scenario, you might fetch this from a server
    const jsonData = {
        "_id": { "$oid": "63b64dc9e3b230ebb60a495d" },
        "_key": "topic:2085",
        "category": "Course",
        "cid": { "$numberDouble": "NaN" },
        "commitment": "4 hours",
        "commitment_type": "custom",
        "deadline": "",
        "description": "<p>Project Management can be applied to daily life tasks. Let's dive in.</p>",
        "faqs": [],
        "globalTags": [],
        "isActive": true,
        "lastposttime": 0,
        "learning_outcomes": [
          "Knowledge of project management",
          "4SA Concept",
          "Efficient project handling"
        ],
        "mainPid": 0,
        "postcount": 0,
        "pre_requisites": [
          "Open mind to learn",
          "Willingness to unlearn and relearn"
        ],
        "project_image": "https://example.com/project-image.png",
        "short_description": "Learn project management by applying simple methods.",
        "slug": "2085/technical-project-management",
        "status": "published",
        "tasks": [
          {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, and completion.",
            "status": "notworkyet",
            "assets": [
              {
                "asset_id": 18883,
                "asset_title": "Technical Project Management",
                "asset_description": "Story of Alignment\nScope of Agility\nSpecific Accountable\nStaggering Approach",
                "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                "asset_type": "display_asset",
                "asset_content_type": "video"
              },
              {
                "asset_id": 18884,
                "asset_title": "Threadbuild",
                "asset_description": "Watch the video and build threads. Jot down key points while watching.",
                "asset_content": "",
                "asset_type": "input_asset",
                "asset_content_type": "threadbuilder"
              },
              {
                "asset_id": 18885,
                "asset_title": "Structure your pointers",
                "asset_description": "Write a 400-500 word article based on your threads.",
                "asset_content": "",
                "asset_type": "input_asset",
                "asset_content_type": "article"
              },
              {
                "asset_id": 18886,
                "asset_title": "4SA Method",
                "asset_description": "Read more about the 4SA method.",
                "asset_content": "https://example.com/4sa-method-article",
                "asset_type": "display_asset",
                "asset_content_type": "article"
              }
            ]
          }
        ],
        "tid": 2085,
        "timestamp": 1672891849700,
        "title": "Technical Project Management",
        "type": "project",
        "uid": 100,
        "viewcount": 0,
        "publishedAt": 1672893847792
      }
    // Get the container element
    const container = document.getElementById("asset-container");
  
    // Loop through each asset and render it
    jsonData.assets.forEach(asset => {
      container.innerHTML += renderAsset(asset);
    });
  });
  function createAssetContainer(asset) {
    const container = document.createElement('div');
    container.classList.add('asset');
    
    const title = document.createElement('h2');
    title.textContent = asset.name;
    
    const description = document.createElement('p');
    description.textContent = asset.description;
    
    container.appendChild(title);
    container.appendChild(description);
    
    return container;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const jsonData = { "_id": { "$oid": "63b64dc9e3b230ebb60a495d" },
        "_key": "topic:2085",
        "category": "Course",
        "cid": { "$numberDouble": "NaN" },
        "commitment": "4 hours",
        "commitment_type": "custom",
        "deadline": "",
        "description": "<p>Project Management can be applied to daily life tasks. Let's dive in.</p>",
        "faqs": [],
        "globalTags": [],
        "isActive": true,
        "lastposttime": 0,
        "learning_outcomes": [
          "Knowledge of project management",
          "4SA Concept",
          "Efficient project handling"
        ],
        "mainPid": 0,
        "postcount": 0,
        "pre_requisites": [
          "Open mind to learn",
          "Willingness to unlearn and relearn"
        ],
        "project_image": "https://example.com/project-image.png",
        "short_description": "Learn project management by applying simple methods.",
        "slug": "2085/technical-project-management",
        "status": "published",
        "tasks": [
          {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, and completion.",
            "status": "notworkyet",
            "assets": [
              {
                "asset_id": 18883,
                "asset_title": "Technical Project Management",
                "asset_description": "Story of Alignment\nScope of Agility\nSpecific Accountable\nStaggering Approach",
                "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                "asset_type": "display_asset",
                "asset_content_type": "video"
              },
              {
                "asset_id": 18884,
                "asset_title": "Threadbuild",
                "asset_description": "Watch the video and build threads. Jot down key points while watching.",
                "asset_content": "",
                "asset_type": "input_asset",
                "asset_content_type": "threadbuilder"
              },
              {
                "asset_id": 18885,
                "asset_title": "Structure your pointers",
                "asset_description": "Write a 400-500 word article based on your threads.",
                "asset_content": "",
                "asset_type": "input_asset",
                "asset_content_type": "article"
              },
              {
                "asset_id": 18886,
                "asset_title": "4SA Method",
                "asset_description": "Read more about the 4SA method.",
                "asset_content": "https://example.com/4sa-method-article",
                "asset_type": "display_asset",
                "asset_content_type": "article"
              }
            ]
          }
        ],
        "tid": 2085,
        "timestamp": 1672891849700,
        "title": "Technical Project Management",
        "type": "project",
        "uid": 100,
        "viewcount": 0,
        "publishedAt": 1672893847792 };
    const container = document.getElementById("asset-container");
    
    jsonData.assets.forEach(asset => {
      container.appendChild(createAssetContainer(asset));
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data
    fetch('ddugky_project.json')
      .then(response => response.json()) // Parse JSON data from the response
      .then(data => {
        // Get the container element
        const container = document.getElementById("asset-container");
        
        // Render each asset
        data.assets.forEach(asset => {
          container.innerHTML += renderAsset(asset); // or container.appendChild(createAssetContainer(asset));
        });
      })
      .catch(error => console.error('Error fetching the JSON data:', error));
  });
  
  