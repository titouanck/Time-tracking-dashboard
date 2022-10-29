document.addEventListener('DOMContentLoaded', () => {
	const hrs = "hrs";
	let interval;
	let intervalS;
	let lastTime;
	let lastTimePrefix = "Last ";
	let lastTimeSuffix = " - ";
	
	function daily(userData) {
		interval = "Day";
		intervalS = "days";
		lastTime = lastTimePrefix + interval + lastTimeSuffix;
	
		document.querySelector('.workCard__time').innerHTML = userData[0].timeframes.daily.current + hrs;
		document.querySelector('.workCard__lastTime').innerHTML = lastTime + userData[0].timeframes.daily.previous + hrs;
		document.querySelector('.playCard__time').innerHTML = userData[1].timeframes.daily.current + hrs;
		document.querySelector('.playCard__lastTime').innerHTML = lastTime + userData[1].timeframes.daily.previous + hrs;
		document.querySelector('.studyCard__time').innerHTML = userData[2].timeframes.daily.current + hrs;
		document.querySelector('.studyCard__lastTime').innerHTML = lastTime + userData[2].timeframes.daily.previous + hrs;
		document.querySelector('.exerciseCard__time').innerHTML = userData[3].timeframes.daily.current + hrs;
		document.querySelector('.exerciseCard__lastTime').innerHTML = lastTime + userData[3].timeframes.daily.previous + hrs;
		document.querySelector('.socialCard__time').innerHTML = userData[4].timeframes.daily.current + hrs;
		document.querySelector('.socialCard__lastTime').innerHTML = lastTime + userData[4].timeframes.daily.previous + hrs;
		document.querySelector('.selfcareCard__time').innerHTML = userData[5].timeframes.daily.current + hrs;
		document.querySelector('.selfcareCard__lastTime').innerHTML = lastTime + userData[5].timeframes.daily.previous + hrs;
	}

	function weekly(userData) {
		interval = "Week";
		intervalS = "weeks";
		lastTime = lastTimePrefix + interval + lastTimeSuffix;
	
		document.querySelector('.workCard__time').innerHTML = userData[0].timeframes.weekly.current + hrs;
		document.querySelector('.workCard__lastTime').innerHTML = lastTime + userData[0].timeframes.weekly.previous + hrs;
		document.querySelector('.playCard__time').innerHTML = userData[1].timeframes.weekly.current + hrs;
		document.querySelector('.playCard__lastTime').innerHTML = lastTime + userData[1].timeframes.weekly.previous + hrs;
		document.querySelector('.studyCard__time').innerHTML = userData[2].timeframes.weekly.current + hrs;
		document.querySelector('.studyCard__lastTime').innerHTML = lastTime + userData[2].timeframes.weekly.previous + hrs;
		document.querySelector('.exerciseCard__time').innerHTML = userData[3].timeframes.weekly.current + hrs;
		document.querySelector('.exerciseCard__lastTime').innerHTML = lastTime + userData[3].timeframes.weekly.previous + hrs;
		document.querySelector('.socialCard__time').innerHTML = userData[4].timeframes.weekly.current + hrs;
		document.querySelector('.socialCard__lastTime').innerHTML = lastTime + userData[4].timeframes.weekly.previous + hrs;
		document.querySelector('.selfcareCard__time').innerHTML = userData[5].timeframes.weekly.current + hrs;
		document.querySelector('.selfcareCard__lastTime').innerHTML = lastTime + userData[5].timeframes.weekly.previous + hrs;
	}

	function monthly(userData) {
		interval = "Month";
		intervalS = "months";
		lastTime = lastTimePrefix + interval + lastTimeSuffix;
	
		document.querySelector('.workCard__time').innerHTML = userData[0].timeframes.monthly.current + hrs;
		document.querySelector('.workCard__lastTime').innerHTML = lastTime + userData[0].timeframes.monthly.previous + hrs;
		document.querySelector('.playCard__time').innerHTML = userData[1].timeframes.monthly.current + hrs;
		document.querySelector('.playCard__lastTime').innerHTML = lastTime + userData[1].timeframes.monthly.previous + hrs;
		document.querySelector('.studyCard__time').innerHTML = userData[2].timeframes.monthly.current + hrs;
		document.querySelector('.studyCard__lastTime').innerHTML = lastTime + userData[2].timeframes.monthly.previous + hrs;
		document.querySelector('.exerciseCard__time').innerHTML = userData[3].timeframes.monthly.current + hrs;
		document.querySelector('.exerciseCard__lastTime').innerHTML = lastTime + userData[3].timeframes.monthly.previous + hrs;
		document.querySelector('.socialCard__time').innerHTML = userData[4].timeframes.monthly.current + hrs;
		document.querySelector('.socialCard__lastTime').innerHTML = lastTime + userData[4].timeframes.monthly.previous + hrs;
		document.querySelector('.selfcareCard__time').innerHTML = userData[5].timeframes.monthly.current + hrs;
		document.querySelector('.selfcareCard__lastTime').innerHTML = lastTime + userData[5].timeframes.monthly.previous + hrs;
	}
	
	let userData;
	function getData(data) {
		userData = data;
		weekly(userData);
	}

	let category = "Weekly";

	document.querySelector('.mainCard__durations__daily').addEventListener('mouseover', () => {
		document.querySelector('.mainCard__durations__daily').style.color = "white";
	});
	document.querySelector('.mainCard__durations__daily').addEventListener('mouseout', () => {
		if (category != "Daily") {
			document.querySelector('.mainCard__durations__daily').style.color = "hsl(235, 45%, 61%)";
		}
	});
	document.querySelector('.mainCard__durations__weekly').addEventListener('mouseover', () => {
		document.querySelector('.mainCard__durations__weekly').style.color = "white";
	});
	document.querySelector('.mainCard__durations__weekly').addEventListener('mouseout', () => {
		if (category != "Weekly") {
			document.querySelector('.mainCard__durations__weekly').style.color = "hsl(235, 45%, 61%)";
		}
	});
	document.querySelector('.mainCard__durations__monthly').addEventListener('mouseover', () => {
		document.querySelector('.mainCard__durations__monthly').style.color = "white";
	});
	document.querySelector('.mainCard__durations__monthly').addEventListener('mouseout', () => {
		if (category != "Monthly") {
			document.querySelector('.mainCard__durations__monthly').style.color = "hsl(235, 45%, 61%)";
		}
	});

	fetch('./data.json')
		.then((response) => response.json())
		.then((data) => getData(data));

	document.querySelector('.mainCard__durations__weekly').style.color = "white";

	function resetColor() {
		document.querySelector('.mainCard__durations__daily').style.color = "hsl(235, 45%, 61%)";
		document.querySelector('.mainCard__durations__weekly').style.color = "hsl(235, 45%, 61%)";
		document.querySelector('.mainCard__durations__monthly').style.color = "hsl(235, 45%, 61%)";
	}
	
	document.querySelector('.mainCard__durations__daily').onclick = () => {
		category = "Daily";
		daily(userData);
		resetColor();
		document.querySelector('.mainCard__durations__daily').style.color = "white";
	};
	document.querySelector('.mainCard__durations__weekly').onclick = () => {
		category = "Weekly";
		weekly(userData);
		resetColor();
		document.querySelector('.mainCard__durations__weekly').style.color = "white";
	};
	document.querySelector('.mainCard__durations__monthly').onclick = () => {
		category = "Monthly";
		monthly(userData);
		resetColor();
		document.querySelector('.mainCard__durations__monthly').style.color = "white";
	};	
});
