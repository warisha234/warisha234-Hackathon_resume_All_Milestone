declare var html2pdf: any;

function buildResume(): void {
  // Collect input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const nationality = (document.getElementById("nationality") as HTMLInputElement).value;
  const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value || '';
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

  // Handle profile picture
  const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
  const resumePic = document.createElement("img");
  resumePic.style.width = "150px";
  resumePic.style.height = "auto";
  resumePic.style.borderRadius = "50%";
  resumePic.style.marginBottom = "10px";
  resumePic.style.objectFit = "cover";

  if (profilePicInput.files && profilePicInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
      resumePic.src = e.target!.result as string;
      document.getElementById("resume")!.prepend(resumePic);
    };
    reader.readAsDataURL(profilePicInput.files[0]);
  } else {
    resumePic.style.display = "none";
  }

  // Build the resume
  const resumeHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Nationality:</strong> ${nationality}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  const resumeDiv = document.getElementById("resume") as HTMLElement;
  resumeDiv.innerHTML = resumeHTML;

  // Ensure PDF button is added only once
  const existingPdfButton = document.getElementById("pdfButton");
  if (existingPdfButton) {
    existingPdfButton.remove();
  }

  // Add PDF generation button
  const pdfButton = document.createElement("button");
  pdfButton.id = "pdfButton";
  pdfButton.textContent = "Download PDF";
  pdfButton.onclick = () => {
    try {
      const resumeElement = document.getElementById('resume')!;
      if (!resumeElement) {
        throw new Error('Resume element not found');
      }
      html2pdf().from(resumeElement).save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  resumeDiv.appendChild(pdfButton);
}
