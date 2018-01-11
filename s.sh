clear 

echo "deleting /dist"
rm -r dist

echo "deleting /tmp"
rm -r tmp

echo "deleting /vendor"
rm -r vendor

echo "starting 'ember serve'"
ember server
