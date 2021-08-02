const DB = 'questDB';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = loadFromStorage(DB);
    if (!gQuestsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null,
    };
}

function isChildless(node) {
    return node.yes === null && node.no === null;
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
    // gCurrQuest = createQuest(gPrevQuest[res].txt);
    // gCurrQuest.txt = gPrevQuest[res].txt;
    gCurrQuest.yes = gPrevQuest[res].yes;
    gCurrQuest.no = gPrevQuest[res].no;
    // return gCurrQuest;
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    gCurrQuest.txt = newQuestTxt;
    gCurrQuest.no = createQuest(gPrevQuest.txt);
    gCurrQuest.yes = createQuest(newGuessTxt);
    saveToStorage(DB, gQuestsTree);
    gCurrQuest = gQuestsTree;
}

function getCurrQuest() {
    return gCurrQuest;
}
