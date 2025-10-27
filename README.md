# 100nock
# 100nock

#課題00

PS C:\100nock> git --version

git version 2.51.0.windows.2

#課題01

PS C:\100nock> echo "# 100nock" >> README.md 

PS C:\100nock> git init 

Reinitialized existing Git repository in C:/100nock/.git/

PS C:\100nock> git add README.md 

PS C:\100nock> git commit -m "最初のコミット" 

[main cf5b851] 最初のコミット


#課題02

PS C:\100nock> ssh -T git@github.com
git@github.com: Permission denied (publickey).

#課題03

PS C:\100nock> git remote -v
origin  https://github.com/miyu1027/100nock.git (fetch)
origin  https://github.com/miyu1027/100nock.git (push)
