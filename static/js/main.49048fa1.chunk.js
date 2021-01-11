(this["webpackJsonpcard-reader-app"]=this["webpackJsonpcard-reader-app"]||[]).push([[0],[,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":0,"name":"Card 0","image":"images/card-deck/0.jpg","action":"What would a library look like in this series? How would we represent the spaces and flow of a library? What essential details make a library recognizable and distinct from other building types? The design duo started this project with sketches. Explore line and volume on paper while walking through space and reducing it to the essentials."},{"id":1,"name":"Card 1","image":"images/card-deck/1.jpg","action":"Create a map of how to navigate your home library using only navigational lines and no landmarks. Narrate this navigational line for a colleague. Share your findings."},{"id":2,"name":"Card 2","image":"images/card-deck/2.jpg","action":"Brainstorm 20+ words that describe your role within librarianship. In a key, assign each word an Architectural aspect (door, window, desk, floor). Draw an Architectural Space using only those words to guide you. What elements are missing? What words might you associate with them?"},{"id":3,"name":"Card 3","image":"images/card-deck/3.jpg","action":"Think about a library beyond physical boundaries. Outside of the physical space, what gives the library shape, form, function? How do walls + infrastructure support these aspects? Describe, draw, collage, or map a library without architectural constraints."},{"id":4,"name":"Card 4","image":"images/card-deck/4.jpg","action":"In a group, individually draw your library using only symbols. Swap with your neighbor and attempt to describe/label the library with words. What seemed natural? What was missed? What was specific and what was ambiguous?"}]')},function(e){e.exports=JSON.parse('[{"id":0,"name":"Card 0","image":"images/card-deck/0.jpg","action":"Select a popular library vendor and examine their terms of service and/or privacy policy. Use the language of one of the policies to write a poem (may be concrete poetry if you\u2019d like to incorporate visuals) about information access. (Polisis: ProQuest, EBSCOhost, JSTOR)"},{"id":1,"name":"Card 1","image":"images/card-deck/1.jpg","action":"Emphasize the Flaws within popular library vendor terms of services. Review the documents and find the words that are problematic. Create a word cloud or a concrete poem with these words or concepts."},{"id":2,"name":"Card 2","image":"images/card-deck/2.jpg","action":"How can we tell stories with data? Attempt to describe or visualize all the ways in which data informs/controls/influences our daily lives in libraries."},{"id":3,"name":"Card 3","image":"images/card-deck/3.jpg","action":"Use one of the terms of service, creatively destroy, leaving a redacted version (or erasure poem). Mail this to the vendor."},{"id":4,"name":"Card 4","image":"images/card-deck/4.jpg","action":"Look at the terms of service, re-imagine them as if their qualities were human (think of descriptive words such as restrictive, secretive, controlling, etc.). Create an online dating profile as if the agreement was a person.  What does this person look like? How might you communicate effectively with this person? What kinds of books might they read? How does transforming this document into human form change how you might approach it?"},{"id":5,"name":"Card 5","image":"images/card-deck/5.jpg","action":"Rewrite or draw the terms of service so a child could understand them."}]')},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(11),o=t.n(i),s=(t(20),t(9)),l=t(5),c=t(12),m=t(13),d=n.a.createContext({}),u=function(e){var a=e.children,t=Object(r.useState)(Object(s.a)(c)),i=Object(l.a)(t,2),o=i[0],u=i[1],h=Object(r.useState)(Object(s.a)(m)),p=Object(l.a)(h,2),g=p[0],w=p[1],f=Object(r.useState)(!1),y=Object(l.a)(f,2),b=y[0],k=y[1],v=Object(r.useState)(!1),E=Object(l.a)(v,2),j=E[0],C=E[1],A=Object(r.useState)(!1),I=Object(l.a)(A,2),x=I[0],O=I[1],N=Object(r.useState)(!1),S=Object(l.a)(N,2),D=S[0],P=S[1],W=function(e){var a=0,t=0,r=null;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),r=e[a],e[a]=e[t],e[t]=r;return e};return n.a.createElement(d.Provider,{value:{showIAP:b,showIAA:j,imaginaryArchitecturesPrompt:function(){O(!1),P(!1),k(!0)},imaginaryArchitecturesAction:function(){u(W(o)),!1===j?C(!0):(C(!1),setTimeout((function(){C(!0)}),0))},IAcardDeck:o,setIACardDeck:u,showIGP:x,showIGA:D,iAgreePrompt:function(){k(!1),C(!1),O(!0)},iAgreeAction:function(){w(W(g)),!1===D?P(!0):(P(!1),setTimeout((function(){P(!0)}),0))},IGcardDeck:g,setIGCardDeck:w}},a)},h=(t(21),t(23)),p=t(27),g=function(e){return n.a.createElement(p.a,{variant:"outline-light",className:"m-1 mb-3",onClick:e.onClick},e.name)},w=function(){var e=Object(r.useContext)(d).imaginaryArchitecturesPrompt,a=Object(r.useContext)(d).iAgreePrompt;return n.a.createElement(h.a,{fluid:!0,className:"jumbotron text-center p-3"},n.a.createElement("h1",{className:"display-4 text-light"},"Speculative Card Deck"),n.a.createElement(g,{name:"Imaginary Architectures",onClick:e}),n.a.createElement(g,{name:"I Agree",onClick:a}))},f=t(24),y=t(25),b=t(26),k=function(){var e=Object(r.useContext)(d),a=e.showIAP,t=e.imaginaryArchitecturesAction;return a?n.a.createElement(f.a,null,n.a.createElement(y.a,{className:"justify-content-center text animated fadeIn slower"},n.a.createElement(b.a,{md:11},n.a.createElement("p",null,n.a.createElement("a",{href:"https://www.dezeen.com/2010/03/10/imaginary-architectures-by-el-ultimo-grito/",rel:"noopener noreferrer",target:"_blank"},"Imaginary Architectures")," (2010) from the design group ",n.a.createElement("a",{href:"https://elultimogrito.website/work",rel:"noopener noreferrer",target:"_blank"},"El Ultimo Grito"),' are blown glass representations of different types of buildings. Reduced to mere lines and shapes, emphasizing movement through space, these objects use the minimum elements necessary to define the building\u2019s primary purpose. In one work, a hotel is comprised of a lower open space (a lobby) with small, repetitive nodes of spaces above (rooms). The group\u2019s process aligns with "a long tradition of what in Italy is called Architectura da Carta, visionary explorations of the unbuilt and unbuildable" (Katz in Nonobject 2011, xxv). Of the project, El Ultimo Grito state:'),n.a.createElement("p",{className:"blockquote"},"\u201cWhen you try to \u2018draw\u2019 on memory you always pull along a learnt way of looking at things, but this memory is never entirely perfect: it has lost or gained along the way\u2026 We like this exercise because it becomes a dialogue between the information you remember, methods of representation and your ability to implement them. But also these become elements that you can play with, which help you deliberately to interpret the world in a different way.\u201d from ",n.a.createElement("a",{href:"https://www.worldcat.org/title/abandon-architectures/oclc/913429960",rel:"noopener noreferrer",target:"_blank"},"El Ultimo Grito: Abandon Architectures")))),n.a.createElement(y.a,{className:"animated fadeIn slower delay-3s center"},n.a.createElement(b.a,null,n.a.createElement(g,{name:"Draw Card",onClick:t})))):null},v=function(e){return n.a.createElement("img",{src:e.src,alt:e.alt,className:"card animated flipInY delay-"+e.delay+"s",value:e.id,onClick:e.onClick})},E=function(){var e=Object(r.useContext)(d),a=e.showIAA,t=e.IAcardDeck;return a?n.a.createElement(f.a,null,n.a.createElement(y.a,{className:"justify-content-center extra-top-margin"},n.a.createElement(b.a,{xs:6,sm:4,md:3},n.a.createElement(v,{src:t[0].image,alt:t[0].name,delay:0,value:t[0].id})),n.a.createElement(b.a,{xs:12,sm:8,md:9,className:"tarot-read animated fadeIn delay-1s slower"},n.a.createElement("p",null,t[0].action)))):null},j=function(){var e=Object(r.useContext)(d),a=e.showIGP,t=e.iAgreeAction;return a?n.a.createElement(f.a,null,n.a.createElement(y.a,{className:"justify-content-center text animated fadeIn slower"},n.a.createElement(b.a,{md:11},n.a.createElement("p",null,"Dima Yarovinsky\u2019s ",n.a.createElement("a",{href:"https://boingboing.net/2018/05/07/tldr.html",rel:"noopener noreferrer",target:"_blank"},"I Agree")," was showcased at last year\u2019s ",n.a.createElement("a",{href:"https://vizknowledge.aalto.fi/",rel:"noopener noreferrer",target:"_blank"},"Visualizing Knowledge")," conference. Each scroll is the terms of service for a popular social media platform. Instagram wins, with over 17,000 words that would take 86 minutes to read. Aaron Betsky (2003) says, \u201cby making the presence of data explicit, we can become aware of the power it has over our lives. By showing us what will happen if we do not control this data, we can experience a counter-model to what we might think of as the less-than-desirable future of the complete, uncontrollable, and unknowable artificiality\u201d (47-48)."))),n.a.createElement(y.a,{className:"animated fadeIn slower delay-3s center"},n.a.createElement(b.a,null,n.a.createElement(g,{name:"Draw Card",onClick:t})))):null},C=function(){var e=Object(r.useContext)(d),a=e.showIGA,t=e.IGcardDeck;return a?n.a.createElement(f.a,null,n.a.createElement(y.a,{className:"justify-content-center extra-top-margin"},n.a.createElement(b.a,{xs:6,sm:4,md:3},n.a.createElement(v,{src:t[0].image,alt:t[0].name,delay:0,value:t[0].id})),n.a.createElement(b.a,{xs:12,sm:8,md:9,className:"tarot-read animated fadeIn delay-1s slower"},n.a.createElement("p",null,t[0].action)))):null};var A=function(){return n.a.createElement(u,null,n.a.createElement(w,null),n.a.createElement(k,null),n.a.createElement(E,null),n.a.createElement(j,null),n.a.createElement(C,null))};o.a.render(n.a.createElement(A,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.49048fa1.chunk.js.map