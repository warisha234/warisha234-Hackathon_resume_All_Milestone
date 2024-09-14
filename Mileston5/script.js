function buildResume() {
    var _a;
    // Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var nationality = document.getElementById("nationality").value;
    var gender = ((_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Handle profile picture
    var profilePicInput = document.getElementById("profilePic");
    var resumePic = document.createElement("img");
    resumePic.style.width = "150px";
    resumePic.style.height = "auto";
    resumePic.style.borderRadius = "50%";
    resumePic.style.marginBottom = "10px";
    resumePic.style.objectFit = "cover";
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            resumePic.src = e.target.result;
            document.getElementById("resume").prepend(resumePic);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        resumePic.style.display = "none";
    }
    // Build the resume
    var resumeHTML = "\n    <h2>".concat(name, "</h2>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n    <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n    <p><strong>Gender:</strong> ").concat(gender, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    var resumeDiv = document.getElementById("resume");
    resumeDiv.innerHTML = resumeHTML;
    // Ensure PDF button is added only once
    var existingPdfButton = document.getElementById("pdfButton");
    if (existingPdfButton) {
        existingPdfButton.remove();
    }
    // Add PDF generation button
    var pdfButton = document.createElement("button");
    pdfButton.id = "pdfButton";
    pdfButton.textContent = "Download PDF";
    pdfButton.onclick = function () {
        try {
            var resumeElement = document.getElementById('resume');
            if (!resumeElement) {
                throw new Error('Resume element not found');
            }
            html2pdf().from(resumeElement).save('resume.pdf');
        }
        catch (error) {
            console.error('Error generating PDF:', error);
        }
    };
    resumeDiv.appendChild(pdfButton);
}
