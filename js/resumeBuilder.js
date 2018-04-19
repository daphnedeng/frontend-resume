const bio = {
    name: 'Daphne Deng',
    role: 'UI Designer & Developer',
    contacts: {
        mobile: '650-336-4957',
        email: 'daphnejdeng@gmail.com',
        github: 'daphnedeng',
        location: 'Sunnyvale, CA'
    },
    skills: ['UX/UI Design', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    biopic: 'images/fry.jpg',
    display: function() {
        const myName = HTMLheaderName.replace('%data%', bio.name);
        const myRole = HTMLheaderRole.replace('%data%', bio.role);
        const contact = HTMLmobile.replace('%data%', bio.contacts.mobile);
        const email = HTMLemail.replace('%data%', bio.contacts.email);
        const github = HTMLgithub.replace('%data%', bio.contacts.github);
        const myLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        const myPic = HTMLbioPic.replace('%data%', bio.biopic);        

        $('#header').prepend(myName, myRole);
        $('#header').append(myPic, HTMLskillsStart);
        $('#topContacts').append(contact, email, github, myLocation)

        this.skills.forEach(skill => {
            let formattedSkills = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkills);
        })
    }
};
bio.display();

const education = {
    schools: [
        {
            name: 'San Francisco State University',
            location: 'San Francisco, CA',
            degree: 'BS',
            majors: ['Information Systems']
        },
        {
            name: 'Mission College',
            location: 'Santa Clara, CA',
            degree: 'Web & Graphic Design Professional Certificates',
            majors: ['Multimedia Design']
        }
    ],
    onlineCourses: [
        {
            title: 'Udacity Front-End Web Developer',
            school: 'Udacity'
        }
    ],
    display: function() {        
        this.schools.forEach(school => {  
            $("#education").append(HTMLschoolStart);          
            let schoolName = HTMLschoolName.replace('%data%', school.name);
            let schoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            let schoolLocation = HTMLschoolLocation.replace('%data%', school.location);
            let major = HTMLschoolMajor.replace('%data%', school.majors);

            $('.education-entry:last').append(schoolName, schoolDegree, schoolLocation, major);            
        });
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(course => {
            $("#education").append(HTMLschoolStart);  
            let courseTitle = HTMLonlineTitle.replace('%data%', course.title);
            let onlineSchool = HTMLonlineSchool.replace('%data%', course.school);

            $('.education-entry:last').append(courseTitle, onlineSchool);      
        });
    }
};
education.display();

const work = {
    jobs: [
        {
            employer: 'Eventsy',
            title: 'UX Designer',
            location: 'Sunnyvale, CA',
            date: '2017',
            description: 'UX design for mobile app.'
        },
        {
            employer: 'Moxtra',
            title: 'UX Design Intern',
            location: 'Cupertino, CA',
            date: '2017',
            description: 'Conducted user research and provide concepts for product improvement.'
        },
        {
            employer: 'Retail Solutions',
            title: 'Operations Analyst',
            location: 'Mountain View, CA',
            date: '2015',
            description: 'Analyzed raw data, built a local database.'
        },
        {
            employer: 'eHealth',
            title: 'Support Engineer',
            location: 'Mountain View, CA',
            date: '2014',
            description: 'Generated reports using SQL. Support multiple internal and client product lines.'
        },
    ],
    display: function() {
        this.jobs.forEach(job => {
            $('#workExperience').append(HTMLworkStart);
            let employerName = HTMLworkEmployer.replace('%data%', job.employer);
            let workTitle = HTMLworkTitle.replace('%data%', job.title);
            let workDate = HTMLworkDates.replace('%data%', job.date);
            let workLocation = HTMLworkLocation.replace('%data%', job.location);
            let workDsrp = HTMLworkDescription.replace('%data%', job.description);
            let employerAndTitle = employerName + workTitle;

            $('.work-entry:last').append(employerAndTitle);
            $('.work-entry:last').append(workDate);
            $('.work-entry:last').append(workLocation);
            $('.work-entry:last').append(workDsrp);
        })
    }
};
work.display();

const projects = {
    projects: [
        {
            title: 'Feed Momo',
            date: '2018',
            description: 'Impletemented a cliassic arcade game using HTML5 Canvas, JavaScript and Jquery',
            images: ['https://github.com/daphnedeng/Feed-Momo/raw/master/images/preview.gif']
        },
        {
            title: 'Memory Matching Game',
            date: '2018',
            description: 'Built a reponsive web game using HTML, CSS, JavaScript and Jquery',
            images: ['https://ddwriteme.files.wordpress.com/2018/03/game.gif?w=605&zoom=2']
        },
        {
            title: 'Feedreader',
            date: '2018',
            description: 'Used Jasmine to write a number of tests against a pre-existing web application',
            images: ['images/197x148.gif']
        }
    ],
    display: function() {
        this.projects.forEach(p => {
            $('#projects').append(HTMLprojectStart);
            let pTitle = HTMLprojectTitle.replace('%data%', p.title);
            let pDate = HTMLprojectDates.replace('%data%', p.date);
            let pDsrp = HTMLprojectDescription.replace('%data%', p.description);
            let pImg = HTMLprojectImage.replace('%data%', p.images);

            $('.project-entry:last').append(pTitle);
            $('.project-entry:last').append(pDate);
            $('.project-entry:last').append(pDsrp);
            $('.project-entry:last').append(pImg);
        });
    }
};
projects.display();