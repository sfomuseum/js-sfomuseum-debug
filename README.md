# sfomuseum.debug

Common JavaScript debugging output for SFO Museum projects.

## Documention

Documentation is incomplete at this time.

## Example

```
<link rel="stylesheet" type="text/css" href="css/sfomuseum.debug.css" />
<script type="text/javascript" src="javascript/sfomuseum.debug.js"></script>
```

And then:

```
var debug = document.body.getAttribute("data-sfomuseum-debug");

if (debug){
	sfomuseum.debug.init();
}

sfomuseum.debug.log("Hello world");
```

