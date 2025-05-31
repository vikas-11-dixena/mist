import React from "react";
import "./courses.css";

const courseData = [
  {
    title: "MERN Stack Development",
    desc: "Master full stack development using MongoDB, Express, React, and Node.js.",
    image: "/images/mern.png",
    category: "technical",
  },
  {
    title: "MEAN Stack Development",
    desc: "Learn full stack development with MongoDB, Express, Angular, and Node.js.",
    image: "/images/mean.png",
    category: "technical",
  },
  {
    title: "Python",
    desc: "Learn Python programming from basics to advanced concepts with hands-on projects.",
    image: "/images/node.png",
    category: "technical",
  },
  {
    title: "Web Development",
    desc: "Build dynamic and responsive websites using HTML, CSS, and JavaScript.",
    image: "/images/webdev.png",
    category: "technical",
  },
  {
    title: "Data Science",
    desc: "Explore data analysis, visualization, and machine learning techniques.",
    image: "/images/datascience.png",
    category: "technical",
  },
  {
    title: "Machine Learning",
    desc: "Dive into machine learning algorithms and their applications in real-world scenarios.",
    image: "/images/machinelearning.png",
    category: "technical",
  },
  {
    title: "SQL Database Management",
    desc: "Learn SQL for managing and querying relational databases effectively.",
    image: "/images/sql.png",
    category: "technical",
  },
  {
    title: "Power BI",
    desc: "Master Power BI for data visualization and business intelligence.",
    image: "/images/powerbi.png",
    category: "technical",
  },
  {
    title: "AWS Cloud Computing",
    desc: "Understand cloud computing concepts and AWS services for scalable applications.",
    image: "/images/aws.png",
    category: "technical",
  },
  {
    title: "App Development",
    desc: "Create mobile applications using React Native and Flutter.",
    image: "/images/appdev.png",
    category: "technical",
  },
  {
    title: "DSA and Algorithms",
    desc: "Learn data structures and algorithms to enhance problem-solving skills.",
    image: "/images/dsa.png",
    category: "technical",
  },
  {
    title: "Azure Cloud Services",
    desc: "Explore Azure services for cloud computing and application deployment.",
    image: "/images/azure.png",
    category: "technical",
  },
  {
    title: "SAP",
    desc: "Gain expertise in SAP for enterprise resource planning and business management.",
    image: "/images/sap.png",
    category: "technical",
  },
  {
    title: "Cybersecurity",
    desc: "Learn cybersecurity principles to protect systems and data from threats.",
    image: "/images/cybersecurity.png",
    category: "technical",
  },
  {
    title: "Data Analytics",
    desc: "Analyze and interpret complex data sets to drive business decisions.",
    image: "/images/dataanalytics.png",
    category: "technical",
  },
  {
    title: "Data Visualization",
    desc: "Create compelling visual representations of data using tools like Tableau and Power BI.",
    image: "/images/datavisualization.png",
    category: "technical",
  },
  {
    title: "Data Engineering",
    desc: "Learn data engineering concepts to build robust data pipelines and architectures.",
    image: "/images/dataengineering.png",
    category: "technical",
  },
  {
    title: "AI and Deep Learning",
    desc: "Explore artificial intelligence and deep learning techniques for advanced applications.",
    image: "/images/ai.png",
    category: "technical",
  },
  {
    title: "Marketing Fundamentals",
    desc: "Learn the basics of marketing strategies and digital marketing techniques.",
    image: "/images/marketing.png",
    category: "non-technical",
  },
  {
    title: "HR Management",
    desc: "Understand human resource management principles and practices.",
    image: "/images/hr.png",
    category: "non-technical",
  },
  {
    title: "Spoken English Coummnication",
    desc: "Improve your spoken English skills for better communication in professional settings.",
    image: "/images/spokenenglish.png",
    category: "non-technical",
  },
  {
    title: "Graphic Designing",
    desc: "Learn graphic design principles and tools to create stunning visuals.",
    image: "/images/graphicdesign.png",
    category: "non-technical",
  },
  {
    title: "Financial Management",
    desc: "Understand financial principles and practices for effective business management.",
    image: "/images/financialmanagement.png",
    category: "non-technical",
  },
  {
    title: "UI/UX Design",
    desc: "Learn user interface and user experience design to create intuitive applications.",
    image: "/images/uiux.png",
    category: "non-technical",
  },
  {
    title: "Leadership and Management",
    desc: "Develop leadership skills and management techniques for effective team leadership.",
    image: "/images/leadership.png",
    category: "non-technical",
  },
  {
    title: "project management",
    desc: "Learn project management methodologies and tools for successful project delivery.",
    image: "/images/projectmanagement.png",
    category: "non-technical",
  },
  {
    title: "Design & Creativity",
    desc: "Enhance your creative skills in design and innovation for various applications.",
    image: "/images/designcreativity.png",
    category: "non-technical",
  },
  {
    title: "Language Learning",
    desc: "Learn new languages to enhance communication skills and cultural understanding.",
    image: "/images/languagelearning.png",
    category: "non-technical",
  },
  {
    title: "Training and Development",
    desc: "Understand training methodologies and development strategies for workforce enhancement.",
    image: "/images/training.png",
    category: "non-technical",
  },
  {
    title: "Soft Skills Development",
    desc: "Enhance your soft skills for better interpersonal communication and teamwork.",
    image: "/images/softskills.png",
    category: "non-technical",
  },
];

const Courses = () => {
  const technicalCourses = courseData.filter(
    (course) => course.category === "technical"
  );
  const nonTechnicalCourses = courseData.filter(
    (course) => course.category === "non-technical"
  );

  const renderCourses = (courses) => (
    <div className="course-row">
      {courses.map((course, idx) => (
        <div key={idx} className="course-card">
          <img src={course.image} alt={course.title} className="course-img" />
          <div className="course-info">
            <h3>{course.title}</h3>
            <p className="desc">{course.desc}</p>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="main-courses">
      <div className="container">
        <h2 className="section-title">Technical Courses</h2>
        {renderCourses(technicalCourses)}

        <h2 className="section-title">Non-Technical Courses</h2>
        {renderCourses(nonTechnicalCourses)}
      </div>
    </div>
  );
};

export default Courses;
