(function(d){
 const s=d.styleSheets,l=s.length,m=[],p=/.+{\s*}$/;
 for(let e,i=0;i<l;++i){
	e=s[i];
	if(e.disabled!==true){
	 const r=e.rules;
	 if(r!==null){
		const l=r.length,q=p;
	  for(let e,i=0;i<l;++i){if(q.test(e=r[i].cssText)!==true){m.push(e)}};
	 };
	};
 };
 if(m.length>0){
	let t=m.join('\n');console.log(t);
 };
})(document);
