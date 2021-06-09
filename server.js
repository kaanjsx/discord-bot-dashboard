const express = require("express")
const Enmap = require('enmap');
const dbg = new Enmap({ name: 'Panel' });
const passport = require('passport');
const session = require('express-session');



const MemoryStore = require('memorystore')(session);
const Strategy = require('passport-discord').Strategy;
const url = require('url');
const helmet = require('helmet');
const { EvaluatedPermissions } = require('discord.js');

var app = express();
const config = require("./conf.json");


var fs = require("fs")// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ

app.use(express.static("./")); 
const https = require('https');
app.set("view engine", "ejs","handlebars"); 
const Discord = require("discord.js")
const client = new Discord.Client();
app.listen(8000)


client.on("ready", () => {
	console.log("site ve bot hazır")
})

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((obj, done) => {
	done(null, obj);
});

passport.use(new Strategy({
	clientID: config.id,
	clientSecret: config.secret,
	callbackURL: 'domain/auth', 
	scope: ['identify', 'guilds'] 
},
(accessToken, refreshToken, profile, done) => {
	process.nextTick(() => done(null, profile));
}));
app.use(session({
	store: new MemoryStore({
		checkPeriod: 86400000
	}),
	secret: 'qwerz', 
	resave: false,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.locals.domain = 'domain'; // local host
const bodyParser = require('body-parser');
const { Console } = require("console");
app.use(bodyParser.json());

function checkAuth(req, res, next) {
	if (req.isAuthenticated()) return next();
	req.session.backURL = req.url;
	res.redirect('/login');
}

app.get('/login', (req, res, next) => {
	if (req.session.backURL) {
		req.session.backURL = 'domain/auth';
	} else if (req.headers.referer) {
		const parsed = url.parse(req.headers.referer);
		if (parsed.hostname === app.locals.domain) {
			req.session.backURL = parsed.path;
		}
	} else {
		req.session.backURL = '/';
	}
	next();
},

passport.authenticate('discord'));
app.get('/auth', passport.authenticate('discord', {
	failureRedirect: '/'
}), (req, res) => {
	if (req.session.backURL) {
		const refurl = req.session.backURL;
		req.session.backURL = null;
		res.redirect(refurl);
	} else {
		res.redirect('/');
	}
});

app.get("/logout", function(req, res) {
    req.session.destroy(() => {
      req.logout();
      res.redirect("/"); 
    });
  });
  
	

app.get('/profil', function(req, res) {
  let user = req.user;
  if(user) {
    res.render("profil", { 
      bot: client,
      member: req.user,
      title: 'Ana Syfa',
      desc: '?'
    });
  } else {
    return res.redirect('/login');
  }
});

app.get('/stats', function(req, res) {
  let user = req.user;
  if(user) {
    res.render("stats", { 
      bot: client,
      member: req.user,
      title: 'Bot Stats',
      desc: '?'
    });
  } else {
    return res.redirect('/login');
  }
});



  app.get('/', function(req, res) {
  res.render("layouts/main", { 
    bot: client.user,
    user: client,
    member: req.user,
    title: 'Ana Sayfa', 
    desc: 'ghost bot güzelmiş öle diolar şefersizler! qwexD' 
  });
});


  app.get('/bilgi', function(req, res) {
  res.render("bilgi", { 
    bot: client.user,
    user: client,
    member: req.user,
    title: 'Bot İnfo', 
    desc: 'qwewqewqe kaan ab 123 kaan ab kaan ab' 
  });
});
// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ

client.login("BOT_TOKEN")

// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ// bu dashboard GHOST DEVELOPMNETE AİTTİR ÇALANI SİKERİM ELİMDEN KİMSE ALMAZ! https://discord.gg/ZEeZ7pZCvJ
