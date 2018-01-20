clear 

echo "deleting /dist"
rm -r dist

echo "deleting /tmp"
rm -r tmp

echo "deleting /vendor"
rm -r vendor

echo "starting 'ember server --proxy http://localhost:4300'"
ember server --proxy http://localhost:4300
