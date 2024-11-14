const sideMenu=document.querySelector('#sideMenu');
const navBar= document.querySelector('nav');
const navLink=document.querySelector('nav ul');
function openMenu(){
sideMenu.style.transform='translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform='translateX(16rem)';

}

window.addEventListener('scroll',()=>{
  if(scrollY > 50){
    navBar.classList.add('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shawdow-white/20')
    navLink.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent')
  }
else{
    navBar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shawdow-white/20')
   navLink.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent')
    
}

})


if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function toggleTheme(){

  document.documentElement.classList.toggle('dark');
  if(document.documentElement.classList.contains('dark')){
    localStorage.theme= 'dark';
  }
  else{
    localStorage.theme= 'light';

  }
}

// Translation


const data={

  english:  {
        "navBar":{
            "home":"Home",
            "about":"About Me",
            "project":"Projects",
            "contact":"Contact",
            "rightcontact":"Contact"
           },
    
           "sideMenu":{
            "sidehome":"Home",
            "sideabout":"About Me",
            "sideproject":"Projects",
            "sidecontact":"Contact"
           },
    
           "headerSection":{
            "name":"Moe Eain San",
            "title":"FullStack Developer",
            "description":"I graduated from the University of Computer Studies, Yangon, and I have over a year of experience in IT. My main areas of expertise are PHP and Java, which I've used extensively in my work. I approach my role with responsibility and flexibility, and I work well within a team. It’s a pleasure to connect with you!"
           },
           "homeButton":{
            "contact":"Contact",
            "resume":"My Resume"
           },
    
           "aboutSection":{
            "name1":"Introduction",
            "title1":"About Me",
            "description1":"I am a dedicated Web Developer with over a year of experience,specializing in PHP and Java for building dynamic, user-friendly websites. I graduated from the University of Computer Studies, Yangon, and have hands-on experience working on various projects in web development. Known for being responsible and adaptable,I work well in a team and am always eager to learn new skills.I am passionate about creating clean, efficient code and developing websites that deliver a great user experience. I aim to contribute to meaningful projects, bringing creative solutions and a strong work ethic to each one."
           },
    
           "language":{
            "langTitle":"Languages",
            "langDescription":"HTML, CSS, Bootstrap, JavaScript,Tailwind CSS,PHP,Java and SpringBoot"
           },
    
           "education":{
            "eduTitle":"Education",
            "eduDescription":"University Of Computer Studies Yangon"
           },
    
           
          "projectCount":{
            "proTitle":"Project",
            "proDescription":" Build 3 more Project With Team and 2 Project Only"
          },
    
          "mainSkill":{
            "skillTitle":"Main Skill"
          },
    
          "toolSection":{
            "toolTitle":"Using Tools"
          },
    
          "projectSection":{
            "projectName":"My Portfolio",
            "projectTitle":"My Latest Project",
            "projectDescription":"I have worked on a variety of projects that have helped enhance my skills and broaden my understanding of web development. These projects include management systems and company websites, where I collaborated with teams to create efficient, user-friendly solutions.Notable projects include a Travel Management System, Library Management System, Medicine and User Management System for a hospital, and the company homepage."
    
          },
    
          "projects":{
            "p1title":"Frontend Design",
            "p1name":"Company Website",
            "p2title":"Backend Coding",
            "p2name":"Web Development",
            "p3title":"Frontend Design",
            "p3name":"Web Development",
            "p4title":"Frontend Design",
            "p4name":"Web Development"
          },
    
          "projectsButton":{
            "pbtnName":"Show More"
          },
    
          "contactSection":{
            "contactName":"My contact",
            "contactTitle":"Contact Us",
            "contactDescription":"  I am looking forward to your message and excited to see it when it comes.",
            "fname":"Enter your name",
            "femail":"Enter your email",
            "fmessage":"Enter your message"
    
             },
    
        "contactButton":{
            "cbtnName":"Send"
         },
    
         "footerSection":{
            "instragram":"Instragram",
            "linkedin":"LinkedIn",
            "github":"GitHub"
            
    
         }
    
    
    
    },

    japanese:{

        
            "navBar":{
                "home":"ホーム",
                "about":"私について",
                "project":"プロジェクト",
                "contact":"お問い合わせ",
                "rightcontact":"お問い合わせ"
               },
        
               "sideMenu":{
                "sidehome":"ホーム",
                "sideabout":"私について",
                "sideproject":"プロジェクト",
                "sidecontact":"お問い合わせ"
               },
        
               "headerSection":{
                "name":"モーエイサン",
                "title":"フルスタック開発者",
                "description":"私はヤンゴンコンピュータ大学を卒業し、IT分野で1年以上の経験があります。主にPHPとJavaを専門としており、これらを仕事で多く使用してきました。責任を持って柔軟に取り組み、チームでの協力が得意です。お会いできることを楽しみにしています！"
               },
               "homeButton":{
                "contact":"お問い合わせ",
                "resume":"私の履歴書"
               },
        
               "aboutSection":{
                "name1":"ご紹介",
                "title1":"私について",
                "description1":"私は1年以上の経験を持つ専任のウェブ開発者で、PHPとJavaを使用して動的でユーザーフレンドリーなウェブサイトを構築しています。ヤンゴンコンピュータ大学を卒業し、ウェブ開発のさまざまなプロジェクトで実務経験を積んできました。責任感があり、柔軟性があることで知られ、チームでうまく働き、新しいスキルを学ぶことに常に意欲的です。クリーンで効率的なコードを作成し、優れたユーザー体験を提供するウェブサイトの開発に情熱を注いでいます。意味のあるプロジェクトに貢献し、創造的な解決策と強い労働倫理を提供することを目指しています。"
               },
        
               "language":{
                "langTitle":"言語",
                "langDescription":"HTML, CSS, Bootstrap, JavaScript,Tailwind CSS,PHP,Java and SpringBoot"
               },
        
               "education":{
                "eduTitle":"学歴",
                "eduDescription":"ヤンゴンコンピュータ大学"
               },
        
               
              "projectCount":{
                "proTitle":"プロジェクト",
                "proDescription":" チームでさらに3つのプロジェクトを構築し、2つのプロジェクトを単独で行いました。"
              },
        
              "mainSkill":{
                "skillTitle":"主なスキル"
              },
        
              "toolSection":{
                "toolTitle":"使用ツール"
              },
        
              "projectSection":{
                "projectName":"私のポートフォリオ",
                "projectTitle":"私の最新のプロジェクト",
                "projectDescription":"私は、スキルを高め、ウェブ開発の理解を深めるのに役立ったさまざまなプロジェクトに取り組んできました。これらのプロジェクトには、管理システムや会社のウェブサイトが含まれ、チームと協力して効率的でユーザーフレンドリーなソリューションを作成しました。主なプロジェクトには、旅行管理システム、図書館管理システム、病院の医療・ユーザー管理システム、そして会社のホームページが含まれます。"
        
              },
        
              "projects":{
                "p1title":"フロントエンドデザイン",
                "p1name":"会社のウェブサイト",
                "p2title":"バックエンドコーディング",
                "p2name":"ウェブ開発",
                "p3title":"フロントエンドデザイン",
                "p3name":"ウェブ開発",
                "p4title":"フロントエンドデザイン",
                "p4name":"ウェブ開発"
              },
        
              "projectsButton":{
                "pbtnName":"もっと見る"
              },
        
              "contactSection":{
                "contactName":"私の連絡先",
                "contactTitle":"お問い合わせ",
                "contactDescription":"あなたのメッセージを楽しみにしており、届くのが待ち遠しいです。",
                "fname":"お名前を入力してください",
                "femail":"メールアドレスを入力してください",
                "fmessage":"メッセージを入力してください"
        
                 },
        
            "contactButton":{
                "cbtnName":"送信"
             },
        
             "footerSection":{
                "instragram":"インスタグラム",
                "linkedin":"リンクトイン",
                "github":"ギットハブ"
                
        
             }
        
        
        
        }

    }





    let currentLang = "english";

    function toggleLanguage() {
        currentLang = currentLang === "english" ? "japanese" : "english";

        // Update each element's text content based on the selected language
        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            const keys = key.split('.');
            let value = data[currentLang];
            keys.forEach(k => {
                value = value[k];
            });
            element.textContent = value;
       

        if (element.tagName === "INPUT"|| element.tagName === "TEXTAREA") {
          element.setAttribute("placeholder", value);
      } else {
          element.textContent = value;
      }
    });
    }


