
        // --- Project Tab Logic ---

        function showProjects(category) {
            const academicDiv = document.getElementById('academic');
            const figmaDiv = document.getElementById('figma');
            const academicButton = document.querySelector('.tab-button:nth-child(1)');
            const figmaButton = document.querySelector('.tab-button:nth-child(2)');

            if (category === 'academic') {
                academicDiv.classList.remove('hidden');
                figmaDiv.classList.add('hidden');
                academicButton.classList.add('active');
                figmaButton.classList.remove('active');
            } else if (category === 'figma') {
                academicDiv.classList.add('hidden');
                figmaDiv.classList.remove('hidden');
                academicButton.classList.remove('active');
                figmaButton.classList.add('active');
            }
        }

        // Initialize with 'academic' view
        window.onload = () => {
            showProjects('academic');
        };

        // --- Certificate Data (for Modals) ---
        const certificateData = {
            'aiml-iirs': {
                title: 'Application of AI/ML Model for Specific Crop Acreage Mapping',
                organization: 'Indian Institute of Remote Sensing (IIRS), ISRO',
                date: 'April 2025',
                image: 'Images/c_aiml.jpg',
                description: 'One-day online workshop on AI/ML applications for agricultural mapping conducted by IIRS under the Indian Space Research Organisation. This technical domain workshop provided foundational knowledge in leveraging satellite data and machine learning algorithms for precise agricultural monitoring.',
                skills: ['AI/ML', 'Remote Sensing', 'Agriculture Mapping', 'ISRO'],
                earnedBy: 'Vaishnavi Suthar'
            },
            // Generic placeholders for other certificates for demonstration
            'frontend-beginners': {
                title: 'Front-end for Beginners',
                organization: 'SoloLearn (Angular Team at Google)',
                date: 'March 2025',
                image: 'Images/c_fb.jpg',
                description: 'A comprehensive introductory course covering modern HTML5, CSS3, and fundamental JavaScript concepts for building responsive web interfaces.',
                skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
                earnedBy: 'Vaishnavi Suthar'
            },
            'design-thinking': {
                title: 'Design Thinking',
                organization: 'HP LIFE Foundation',
                date: 'March 2025',
                image: 'Images/c_dt.jpg',
                description: 'A certification focusing on the five stages of Design Thinking: Empathize, Define, Ideate, Prototype, and Test.',
                skills: ['Design Thinking', 'UX Research', 'Prototyping'],
                earnedBy: 'Vaishnavi Suthar'
            },
            'cybersecurity-intro': {
                title: 'Introduction to Cybersecurity Awareness',
                organization: 'HP LIFE Foundation',
                date: 'March 2025',
                image: 'Images/c_ics.jpg',
                description: 'An introductory workshop covering essential cybersecurity practices, threat identification, and data protection fundamentals.',
                skills: ['Cybersecurity', 'Data Protection', 'IT Security'],
                earnedBy: 'Vaishnavi Suthar'
            },
            'canva-marketing': {
                title: 'Marketing with Canva',
                organization: 'Canva Design School',
                date: 'July 2025',
                image: 'Images/c_mc.jpg',
                description: 'Practical training on using Canva to create compelling visual content for social media and marketing campaigns.',
                skills: ['Canva', 'Visual Design', 'Graphic Design', 'Marketing Design'],
                earnedBy: 'Vaishnavi Suthar'
            },
            'python-basic': {
                title: 'Python (Basic)',
                organization: 'HackerRank',
                date: 'August 2025',
                image: 'Images/c_py.jpg',
                description: 'The bearer of this certificate has passed the HackerRank Python (Basic) skill certification test, demonstrating proficiency in fundamental Python programming concepts and problem-solving abilities.',
                skills: ['Python', 'Programming', 'Scripting'],
                earnedBy: 'Vaishnavi Suthar'
            },
            'sql-basic': {
                title: 'SQL (Basic)',
                organization: 'HackerRank',
                date: 'August 2025',
                image: 'Images/c_sql.jpeg',
                description: 'The bearer of this certificate has passed the HackerRank SQL (Basic) skill certification test, demonstrating proficiency in fundamental database querying and data manipulation.',
                skills: ['SQL', 'Databases', 'Data Querying'],
                earnedBy: 'Vaishnavi Suthar'
            },
        };


        // --- Certificate Modal Functions ---

        function openCertificateModal(id) {
            const cert = certificateData[id];
            const modal = document.getElementById('cert-modal');
            const content = document.getElementById('cert-modal-content');

            if (!cert) {
                // If data is missing (e.g., for a placeholder cert), show a message
                console.error(`Certificate data for ID: ${id} is missing.`);
                document.getElementById('message-box').innerHTML = `
                    <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center transform transition-all duration-300 scale-100" onclick="event.stopPropagation()">
                        <h4 class="text-xl font-bold mb-2 text-red-500">Error</h4>
                        <p class="text-gray-600 mb-4">Detailed information for this certificate is currently unavailable.</p>
                        <button onclick="hideMessage()" class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Close</button>
                    </div>
                `;
                document.getElementById('message-box').classList.remove('hidden');
                return;
            }

            // Populate the modal fields
            document.getElementById('modal-cert-title').textContent = cert.title;
            document.getElementById('modal-cert-org').textContent = cert.organization;
            document.getElementById('modal-cert-date').textContent = cert.date;
            document.getElementById('modal-cert-image').src = cert.image;
            document.getElementById('modal-cert-description').textContent = cert.description;
            document.getElementById('modal-cert-earned-by').textContent = cert.earnedBy;
            
            // Populate skills
            const skillsContainer = document.getElementById('modal-cert-skills');
            skillsContainer.innerHTML = ''; // Clear previous skills
            cert.skills.forEach(skill => {
                const span = document.createElement('span');
                // Use skill-tag styling for consistency but make it look slightly different for the modal
                span.className = 'px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-sm font-medium border border-violet-200';
                span.textContent = skill;
                skillsContainer.appendChild(span);
            });

            // Show modal with transition classes
            modal.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('modal-enter');
                content.classList.add('modal-enter-active');
            }, 10); // Small delay for transition trigger
        }

        function closeCertificateModal() {
            const modal = document.getElementById('cert-modal');
            const content = document.getElementById('cert-modal-content');
            
            // Hide modal with transition classes
            content.classList.remove('modal-enter-active');
            content.classList.add('modal-exit-active');

            setTimeout(() => {
                modal.classList.add('hidden');
                content.classList.remove('modal-exit-active');
                content.classList.add('modal-enter'); // Reset state for next open
            }, 300); // Wait for transition to finish
        }

        // --- Utility Functions ---

        /**
         * Simple custom message box function (replaces alert()).
         */
        function showMessage() {
            // Restore default message box content
            document.getElementById('message-box').innerHTML = `
                <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center transform transition-all duration-300 scale-100" onclick="event.stopPropagation()">
                    <svg class="w-10 h-10 text-violet-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h4 class="text-xl font-bold mb-2 text-gray-800">Message Sent!</h4>
                    <p class="text-gray-600 mb-4">Thanks for reaching out. I'll get back to you soon.</p>
                    <button onclick="hideMessage()" class="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">Close</button>
                </div>
            `;
            document.getElementById('message-box').classList.remove('hidden');
            // Optional: Clear form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }

        function hideMessage() {
            document.getElementById('message-box').classList.add('hidden');
        }

        // Simple smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // // --- Gemini API Frontend Test Version ---
        //     const API_URL =
        //     "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

        //     const apiKey = "YOUR_API_KEY_HERE"; // <-- Put your Gemini API key

        //     async function generateProjectIdea() {
        //     const promptInput = document.getElementById("project-prompt");
        //     const outputDiv = document.getElementById("project-output");
        //     const loadingIndicator = document.getElementById("loading-indicator");
        //     const resultContent = document.getElementById("project-result-content");
        //     const generateButton = document.getElementById("generate-button");
        //     const errorElement = document.getElementById("api-error");

        //     const userQuery = promptInput.value.trim();
        //     if (!userQuery) {
        //         errorElement.textContent =
        //         "Please enter a technology or theme to generate an idea.";
        //         errorElement.classList.remove("hidden");
        //         return;
        //     }

        //     // UI Loading State
        //     generateButton.disabled = true;
        //     generateButton.innerHTML =
        //         '<div class="spinner border-white/50 border-l-white"></div>';
        //     outputDiv.classList.remove("hidden");
        //     loadingIndicator.classList.remove("hidden");
        //     resultContent.innerHTML = "";
        //     errorElement.classList.add("hidden");

        //     try {
        //         // ⭐ NEW Gemini API Format
        //         const payload = {
        //         contents: [
        //             {
        //             parts: [
        //                 {
        //                 text:
        //                     "You are a creative project idea generator for a UI/UX designer. " +
        //                     "User query: " +
        //                     userQuery,
        //                 },
        //             ],
        //             },
        //         ],
        //         generationConfig: {
        //             temperature: 0.7,
        //             topK: 40,
        //             topP: 0.8,
        //         },
        //         };

        //         const response = await fetch(`${API_URL}?key=${apiKey}`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(payload),
        //         });

        //         if (!response.ok) {
        //         const errorBody = await response.text();
        //         throw new Error(`API Error ${response.status}: ${errorBody}`);
        //         }

        //         const result = await response.json();
        //         console.log("Raw API response:", result);

        //         // Gemini returns this:
        //         const aiText =
        //         result?.candidates?.[0]?.content?.parts?.[0]?.text ||
        //         "No idea generated.";

        //         // Try parsing JSON structure if AI returns it
        //         let parsed = { title: "Design Project Idea", description: aiText };
        //         try {
        //         parsed = JSON.parse(aiText);
        //         } catch (e) {}

        //         resultContent.innerHTML = `
        //                 <h4 class="text-2xl font-bold mb-2 text-pink-400">${parsed.title}</h4>
        //                 <p class="text-gray-400">${parsed.description}</p>
        //                 <p class="text-xs text-gray-500 mt-3">Idea generated by Gemini.</p>
        //             `;
        //     } catch (error) {
        //         console.error("Gemini API Error:", error);
        //         errorElement.textContent = "Error generating idea. Check console.";
        //         errorElement.classList.remove("hidden");
        //     } finally {
        //         loadingIndicator.classList.add("hidden");
        //         generateButton.disabled = false;
        //         generateButton.innerHTML = "Generate Idea";
        //     }
        //     }

    
       
        function animateCount(id, target) {
            let element = document.getElementById(id);
            let count = 0;
            let speed = 500; // lower = faster

            let update = setInterval(() => {
                if (count < target) {
                    count++;
                    element.textContent = count + "+";
                } else {
                    clearInterval(update);
                }
            }, speed);
        }

        window.onload = () => {
            showProjects('academic');
            animateCount("countProjects", 3);   // animate 0 -> 3
            animateCount("countCert", 7);       // animate 0 -> 7
        };

        document.getElementById("contactForm").addEventListener("submit", function(e){
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Show "Message Sending..."
            document.getElementById("contact-status").innerHTML = "Message Sending...";

            emailjs.send("service_oz3ksdp", "template_hfiz0gr", {
                name: name,        // must match template
                email: email,      // must match template
                message: message,  // must match template
            })
            .then(() => {
                document.getElementById("contact-status").innerHTML = "Message Sent Successfully!";
                document.getElementById("contactForm").reset();
            })
            .catch((error) => {
                document.getElementById("contact-status").innerHTML = "Error Sending Message!";
                console.error(error);
            });
        });


        // Footer
        function scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

const projectImages = {
    srms: {
        title: "Student Result Management System",
        images: [
            "Images/s_home.png",
            "Images/s_alogin.png",
            "Images/s_dashboard.png",
            "Images/s_slogin.png",
            "Images/s_tdashboard.png",
            "Images/s_slist.png",
            "Images/s_sublist.png",
            "Images/s_elist.png",
            "Images/s_sresult.png"
        ]
    },

    rainfall: {
        title: "Rainfall Prediction Using ML",
        images: [
            "Images/r_login.png",
            "Images/r_register.png",
            "Images/r_pr.png",
            "Images/r_yespr.png",
            "Images/r_nopr.png",
            "Images/r_prhistory.png",
            "Images/r_audit.png"
        ]
    },

    pg: {
        title: "PG Management System",
        images: [
            "Images/p_home.png",
            "Images/p_login.png",
            "Images/p_dashboard.png",
            "Images/p_room.png",
            "Images/p_tenant.png",
            "Images/p_pay.png",
            "Images/p_complain.png",
            "Images/p_report.png"
            
            
        ]
    },

    chatbot: {
        title: "AI ChatBot System",
        images: [
            "Images/a_1.png",
            "Images/a_2.png",
            "Images/a_3.png"
        ]
    }
};


// OPEN IMAGE POPUP
function openImages(projectKey) {

    const modal = document.getElementById("imageModal");
    const title = document.getElementById("modalTitle");
    const container = document.getElementById("modalImages");

    const project = projectImages[projectKey];

    title.textContent = project.title;
    container.innerHTML = "";

    project.images.forEach(src => {
        container.innerHTML += `
            <img src="${src}" 
                 class="rounded-lg shadow-lg w-full h-auto object-contain 
                        transition-transform duration-300 hover:scale-105 cursor-pointer">
        `;
    });

    modal.classList.remove("hidden");
}


// CLOSE MODAL
function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
}





