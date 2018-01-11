const agentsMock = [
    {
        "id": "A111",
        "firstname": "Mario",
        "lastname": "Linz",
        "email": "mario.linz@rewe-digital.com",
        "permissions": [
          "CSA_PURCHACE_ON_ACCOUNT",
          "CSA_INVOICE_CORRECTION_APPROVER",
          "CSA_INVOICE_CORRECTION_SUBMITTER",
          "CSA_WHITELIST",
          "CSA_DELIVERYINFO",
          "CSA_REKOCHECK"
        ]
    },
    {
        "id": "A222",
        "firstname": "Stefan",
        "lastname": "Riehmer",
        "email": "stefan.riehmer@rewe-digital.com",
        "permissions": [
          "CSA_PURCHACE_ON_ACCOUNT",
          "CSA_INVOICE_CORRECTION_APPROVER",
          "CSA_INVOICE_CORRECTION_SUBMITTER",
          "CSA_WHITELIST"
        //   "CSA_DELIVERYINFO",
        //   "CSA_REKOCHECK"
        ]
    }
];

module.exports = {
    agents: agentsMock
};
