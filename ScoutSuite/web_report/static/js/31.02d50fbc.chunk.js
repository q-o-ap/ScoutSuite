(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[31,124],{585:function(e,t,c){"use strict";c.r(t);var n=c(1),r=(c(0),c(55)),a=c(43);t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.c,{label:"ARN",valuePath:"arn"}),Object(n.jsx)(r.c,{label:"Node Type",valuePath:"NodeType"}),Object(n.jsx)(r.c,{label:"Allow Version Upgrade",valuePath:"AllowVersionUpgrade"}),Object(n.jsx)(r.c,{label:"Automated Snapshot Retention Period",valuePath:"AutomatedSnapshotRetentionPeriod"}),Object(n.jsx)(r.c,{label:"Creation Time",valuePath:"ClusterCreateTime",renderValue:a.h}),Object(n.jsx)(r.c,{label:"Availability Zone",valuePath:"AvailabilityZone"}),Object(n.jsx)(r.c,{label:"Encrypted",valuePath:"Encrypted"}),Object(n.jsx)(r.c,{label:"Cluster Parameter Groups",valuePath:"ClusterParameterGroups",renderValue:function(e){return Object(n.jsx)("ul",{children:e.map((function(e,t){return Object(n.jsx)("li",{children:e.ParameterGroupName},t)}))})}})]})}},634:function(e,t,c){"use strict";c.r(t);var n=c(1),r=(c(0),c(15)),a=c.n(r),l=c(29),i=c.n(l),u=(c(43),c(55)),s=c(764),j=c(761),o=c(585);t.default=function(e){var t=e.data;if(!t)return null;var c=a()(t,["item","VpcSecurityGroups"]),r=a()(t,["item","ClusterSecurityGroups"]);return Object(n.jsxs)(u.a,{data:t,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)(o.default,{})}),Object(n.jsx)(s.b,{children:Object(n.jsx)(s.a,{title:"Network",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(u.c,{label:"Endpoint",valuePath:"Endpoint",renderValue:function(e){return"".concat(e.Address,":").concat(e.Port)}}),Object(n.jsx)(u.c,{label:"Publicly Accessible",valuePath:"PubliclyAccessible"}),Object(n.jsx)(u.c,{label:"VPC",valuePath:"VpcId"}),Object(n.jsx)(u.c,{label:"Subnet",valuePath:"ClusterSubnetGroupName"}),!(i()(c)&&i()(r))&&Object(n.jsx)(u.c,{label:"Security Groups",renderValue:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)("li",{children:"".concat(e.VpcSecurityGroupId," ").concat(e.Status)},t)}))}),Object(n.jsx)("ul",{children:r.map((function(e,t){return Object(n.jsx)("li",{children:"".concat(e.ClusterSecurityGroupName," ").concat(e.Status)},t)}))})]})}})]})})})]})}},761:function(e,t,c){"use strict";var n=c(1);c(0),c(762);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},762:function(e,t,c){},763:function(e,t,c){},764:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return u.b}));var n=c(1),r=c(12),a=c(0),l=c(8),i=c.n(l),u=c(77),s=c(78),j=c(62),o=(c(763),function(e){var t=e.title,c=e.isSelected,l=e.disabled,o=e.onClick,b=e.children,d=Object(a.useState)(""),h=Object(r.a)(d,2),p=h[0],O=h[1],x=p?Object(n.jsxs)(n.Fragment,{children:[t,j.a[p].icon]}):t;return Object(n.jsx)(s.c.Provider,{value:O,children:Object(n.jsx)(u.a,{title:x,className:i()("partial-tab-pane",p),isSelected:c,disabled:l,onClick:o,children:b})})})}}]);
//# sourceMappingURL=31.02d50fbc.chunk.js.map