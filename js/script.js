$(".links a.skillLink").click(() => {
    $(".more").slideToggle();
});

$(".links a.contactLink").click(e => {
    e. preventDefault();
    if ($(".contact").css("opacity") == 0) {
        $(".contact").css("opacity", "1");
    } else {
        $(".contact").css("opacity", "0");
    }
});

$("#showMore").click(e => {
    e.preventDefault();
    $(this).hide();
    $("#hiddenWork").slideToggle();
});

const projects = [
    {
      name: 'Tonic',
      url: 'https://github.com/ramzallan/tonic/',
      info: 'Single page web frontend for CSH\'s networked vending machines. '
        + 'Allows members to view stock and drop drinks, while Admins can edit data in the underlying DB. '
        + 'Uses React, Redux, and React Router, running on Node.js using JavaScript ES6',
    },
    {
      name: 'Resume Review',
      url: 'https://github.com/ramzallan/resume-review/',
      info: 'A web app written for <a href="https://csh.rit.edu" target="_blank">CSH</a> members to upload their resumes and receive feedback on them. '
        + 'Made using Express, a Node.js framework, running on CSH’s OpenShift Origin cluster, uses our internal S3 to store files, and stores metadata and comments in a PostgreSQL database.',
    },
    {
      name: 'Gallery',
      url: 'https://github.com/computersciencehouse/gallery/',
      info: 'A media gallery for <a href="http://csh.rit.edu" target="_blank">CSH</a>, written using Flask, SQLAlchemy, ImageMagick, HTML5 &amp; Jinja, CSS3, and JavaScript. '
        + 'Made fully extensible for any file-type.',
    },
    {
      name: 'CSH Map',
      url: 'https://github.com/ramzallan/csh-map/',
      info: 'An interactive map that shows the occupants of each room in CSH. Built using Flask on OpenShift, pulls directly from an internal LDAP server to update automatically.',
    },
];

$(document).ready(() => {
    const list = $('.work ul').first();
    projects.map(project => list.append(`
        <li>
            <a href="${project.url}" target="_blank">${project.name}</a>
        </li>
        <p>
            ${project.info}
        </p>
    `));
})
